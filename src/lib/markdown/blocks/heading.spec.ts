import { describe, expect, it } from 'vitest'
import { heading } from './heading'
import type { ParseContext } from '../types'

const ctx: ParseContext = {
  parseInline: (t) => t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'),
  parseBlocks: (l) => l.join('\n'),
}

describe('heading ブロックルール', () => {
  it('# 見出しを h1 に変換する', () => {
    expect(heading(['# タイトル'], 0, ctx)).toEqual({ html: '<h1>タイトル</h1>', next: 1 })
  })

  it('###### を h6 に変換する', () => {
    expect(heading(['###### 小'], 0, ctx)).toEqual({ html: '<h6>小</h6>', next: 1 })
  })

  it('見出しテキスト内のインライン要素を変換する', () => {
    expect(heading(['## **強調**見出し'], 0, ctx)).toEqual({
      html: '<h2><strong>強調</strong>見出し</h2>',
      next: 1,
    })
  })

  it('# が7個以上は見出しではない（null）', () => {
    expect(heading(['####### too many'], 0, ctx)).toBeNull()
  })

  it('# の後にスペースがなければ見出しではない（null）', () => {
    expect(heading(['#notheading'], 0, ctx)).toBeNull()
  })

  it('見出しでない行は null を返す', () => {
    expect(heading(['ただの段落'], 0, ctx)).toBeNull()
  })
})
