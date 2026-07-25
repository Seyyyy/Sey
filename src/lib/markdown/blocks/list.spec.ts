import { describe, expect, it } from 'vitest'
import { list } from './list'
import type { ParseContext } from '../types'

const ctx: ParseContext = { parseInline: (t) => t, parseBlocks: (l) => l.join('\n') }
const upperCtx: ParseContext = { parseInline: (t) => t.toUpperCase(), parseBlocks: (l) => l.join('\n') }

describe('list ブロックルール', () => {
  it('箇条書きを ul に変換する', () => {
    expect(list(['- a', '- b'], 0, ctx)).toEqual({
      html: '<ul><li>a</li><li>b</li></ul>',
      next: 2,
    })
  })

  it('* や + のマーカーも箇条書きとして扱う', () => {
    expect(list(['* a', '+ b'], 0, ctx)!.html).toBe('<ul><li>a</li><li>b</li></ul>')
  })

  it('番号リストを ol に変換する', () => {
    expect(list(['1. a', '2. b'], 0, ctx)).toEqual({
      html: '<ol><li>a</li><li>b</li></ol>',
      next: 2,
    })
  })

  it('インデントされた項目をネストした子リストにする', () => {
    const lines = ['- a', '  - a1', '  - a2', '- b']
    expect(list(lines, 0, ctx)).toEqual({
      html: '<ul><li>a<ul><li>a1</li><li>a2</li></ul></li><li>b</li></ul>',
      next: 4,
    })
  })

  it('項目テキストにインライン変換を適用する', () => {
    expect(list(['- a'], 0, upperCtx)!.html).toBe('<ul><li>A</li></ul>')
  })

  it('インデントされた継続行（非リスト）を同じ項目に取り込む', () => {
    // インライン処理は本物の parseInline ではなくスタブなので、改行のまま結合される
    const lines = ['- 分析的', '  継続行', '- 次の項目']
    expect(list(lines, 0, ctx)).toEqual({
      html: '<ul><li>分析的\n継続行</li><li>次の項目</li></ul>',
      next: 3,
    })
  })

  it('空行でリストを終了する', () => {
    const result = list(['- a', '', 'text'], 0, ctx)!
    expect(result.next).toBe(1)
    expect(result.html).toBe('<ul><li>a</li></ul>')
  })

  it('リストでない行は null を返す', () => {
    expect(list(['普通の段落'], 0, ctx)).toBeNull()
  })
})
