import { describe, expect, it } from 'vitest'
import { table } from './table'
import type { ParseContext } from '../types'

const ctx: ParseContext = { parseInline: (t) => t, parseBlocks: (l) => l.join('\n') }

describe('table ブロックルール', () => {
  it('ヘッダ＋区切り＋本文をtableに変換する', () => {
    const lines = ['| a | b |', '| --- | --- |', '| 1 | 2 |']
    expect(table(lines, 0, ctx)).toEqual({
      html: '<table><thead><tr><th>a</th><th>b</th></tr></thead><tbody><tr><td>1</td><td>2</td></tr></tbody></table>',
      next: 3,
    })
  })

  it('複数の本文行を扱う', () => {
    const lines = ['| a |', '| - |', '| 1 |', '| 2 |']
    const result = table(lines, 0, ctx)!
    expect(result.next).toBe(4)
    expect(result.html).toContain('<td>1</td>')
    expect(result.html).toContain('<td>2</td>')
  })

  it('セル内のインライン変換を適用する', () => {
    const upper: ParseContext = { parseInline: (t) => t.toUpperCase(), parseBlocks: (l) => l.join('\n') }
    const lines = ['| a |', '| - |', '| x |']
    expect(table(lines, 0, upper)!.html).toContain('<th>A</th>')
  })

  it('2行目が区切りでなければ null（テーブルではない）', () => {
    expect(table(['| a | b |', 'ただの行'], 0, ctx)).toBeNull()
  })

  it('パイプを含まない行は null を返す', () => {
    expect(table(['普通の段落'], 0, ctx)).toBeNull()
  })
})
