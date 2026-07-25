import { describe, expect, it } from 'vitest'
import { blockquote } from './blockquote'
import type { ParseContext } from '../types'

// 内側の再帰処理を可視化するためのスタブ
const ctx: ParseContext = {
  parseInline: (t) => t,
  parseBlocks: (l) => `<INNER>${l.join('\n')}</INNER>`,
}

describe('blockquote ブロックルール', () => {
  it('> で始まる行を blockquote に変換し、中身を再帰処理する', () => {
    expect(blockquote(['> hello'], 0, ctx)).toEqual({
      html: '<blockquote><INNER>hello</INNER></blockquote>',
      next: 1,
    })
  })

  it('連続する引用行をまとめる', () => {
    expect(blockquote(['> a', '> b'], 0, ctx)).toEqual({
      html: '<blockquote><INNER>a\nb</INNER></blockquote>',
      next: 2,
    })
  })

  it('> の直後にスペースがなくても引用として扱う', () => {
    expect(blockquote(['>quoted'], 0, ctx)).toEqual({
      html: '<blockquote><INNER>quoted</INNER></blockquote>',
      next: 1,
    })
  })

  it('引用の後の非引用行は取り込まない', () => {
    const result = blockquote(['> a', 'normal'], 0, ctx)!
    expect(result.next).toBe(1)
  })

  it('引用でない行は null を返す', () => {
    expect(blockquote(['normal'], 0, ctx)).toBeNull()
  })
})
