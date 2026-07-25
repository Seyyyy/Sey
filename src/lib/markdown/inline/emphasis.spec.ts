import { describe, expect, it } from 'vitest'
import { applyEmphasis } from './emphasis'

describe('applyEmphasis', () => {
  it('**text** を <strong> に変換する', () => {
    expect(applyEmphasis('a **bold** b')).toBe('a <strong>bold</strong> b')
  })

  it('*text* を <em> に変換する', () => {
    expect(applyEmphasis('a *italic* b')).toBe('a <em>italic</em> b')
  })

  it('_text_ を <em> に変換する', () => {
    expect(applyEmphasis('a _italic_ b')).toBe('a <em>italic</em> b')
  })

  it('太字を斜体より先に処理し二重変換しない', () => {
    expect(applyEmphasis('**strong**')).toBe('<strong>strong</strong>')
  })

  it('強調記号がなければそのまま返す', () => {
    expect(applyEmphasis('plain text')).toBe('plain text')
  })
})
