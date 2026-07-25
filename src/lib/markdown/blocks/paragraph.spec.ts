import { describe, expect, it } from 'vitest'
import { renderParagraph } from './paragraph'
import type { ParseContext } from '../types'

const ctx: ParseContext = { parseInline: (t) => t, parseBlocks: (l) => l.join('\n') }

describe('renderParagraph', () => {
  it('行を p で包む', () => {
    expect(renderParagraph(['hello'], ctx)).toBe('<p>hello</p>')
  })

  it('複数行は改行でつないで p に包む', () => {
    expect(renderParagraph(['a', 'b'], ctx)).toBe('<p>a\nb</p>')
  })

  it('インライン変換を適用する', () => {
    const upper: ParseContext = { parseInline: (t) => t.toUpperCase(), parseBlocks: (l) => l.join('\n') }
    expect(renderParagraph(['abc'], upper)).toBe('<p>ABC</p>')
  })
})
