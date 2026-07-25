import { describe, expect, it } from 'vitest'
import { hr } from './hr'
import type { ParseContext } from '../types'

const ctx: ParseContext = { parseInline: (t) => t, parseBlocks: (l) => l.join('\n') }

describe('hr ブロックルール', () => {
  it('--- を <hr> に変換する', () => {
    expect(hr(['---'], 0, ctx)).toEqual({ html: '<hr>', next: 1 })
  })

  it('*** を <hr> に変換する', () => {
    expect(hr(['***'], 0, ctx)).toEqual({ html: '<hr>', next: 1 })
  })

  it('___ を <hr> に変換する', () => {
    expect(hr(['___'], 0, ctx)).toEqual({ html: '<hr>', next: 1 })
  })

  it('4文字以上でも水平線として扱う', () => {
    expect(hr(['-----'], 0, ctx)).toEqual({ html: '<hr>', next: 1 })
  })

  it('水平線でない行は null を返す', () => {
    expect(hr(['-- 途中'], 0, ctx)).toBeNull()
  })
})
