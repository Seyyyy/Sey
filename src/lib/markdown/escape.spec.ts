import { describe, expect, it } from 'vitest'
import { escapeHtml } from './escape'

describe('escapeHtml', () => {
  it('エスケープが必要な文字を実体参照に変換する', () => {
    expect(escapeHtml('<div class="a">&\'')).toBe('&lt;div class=&quot;a&quot;&gt;&amp;&#39;')
  })

  it('通常の文字列はそのまま返す', () => {
    expect(escapeHtml('hello world')).toBe('hello world')
  })

  it('& を最初に処理して二重エスケープしない', () => {
    expect(escapeHtml('a & <b>')).toBe('a &amp; &lt;b&gt;')
  })
})
