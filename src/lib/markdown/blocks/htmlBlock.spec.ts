import { describe, expect, it } from 'vitest'
import { htmlBlock } from './htmlBlock'
import type { ParseContext } from '../types'

// インライン変換されないことを確認するため、呼ばれたら壊すスタブ
const ctx: ParseContext = {
  parseInline: () => 'SHOULD_NOT_BE_CALLED',
  parseBlocks: (l) => l.join('\n'),
}

describe('htmlBlock ブロックルール', () => {
  it('タグで始まる行をそのまま透過する', () => {
    expect(htmlBlock(['<div class="x">中身</div>'], 0, ctx)).toEqual({
      html: '<div class="x">中身</div>',
      next: 1,
    })
  })

  it('空行までの複数行をまとめて透過する', () => {
    const lines = ['<figure>', '<img src="/a.png">', '</figure>', '', 'text']
    expect(htmlBlock(lines, 0, ctx)).toEqual({
      html: '<figure>\n<img src="/a.png">\n</figure>',
      next: 3,
    })
  })

  it('閉じタグ・コメントで始まる行も透過する', () => {
    expect(htmlBlock(['<!-- comment -->'], 0, ctx)!.html).toBe('<!-- comment -->')
  })

  it('タグで始まらない行は null を返す', () => {
    expect(htmlBlock(['ただのテキスト'], 0, ctx)).toBeNull()
  })
})
