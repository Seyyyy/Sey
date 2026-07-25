import { describe, expect, it } from 'vitest'
import { codeBlock } from './codeBlock'
import type { ParseContext } from '../types'

const ctx: ParseContext = { parseInline: (t) => t, parseBlocks: (l) => l.join('\n') }

describe('codeBlock ブロックルール', () => {
  it('言語付きフェンスを highlight.js で色付けし pre>code で包む', () => {
    const lines = ['```js', 'const x = 1;', '```']
    const result = codeBlock(lines, 0, ctx)!
    expect(result.next).toBe(3)
    expect(result.html.startsWith('<pre><code class="hljs language-js">')).toBe(true)
    expect(result.html.endsWith('</code></pre>')).toBe(true)
    // ハイライトが実際に効いている（キーワードにspanが付く）
    expect(result.html).toContain('hljs-keyword')
  })

  it('言語なしフェンスは highlight.js で自動判定して色付けする（現状の detect:true 相当）', () => {
    const lines = ['```', 'const x = 1;', '```']
    const result = codeBlock(lines, 0, ctx)!
    // 自動判定された言語クラスが付き、ハイライトのspanが生成される
    expect(result.html).toMatch(/^<pre><code class="hljs language-\w+">/)
    expect(result.html).toMatch(/hljs-\w/)
  })

  it('未登録の言語は色付けせず内容をエスケープして language クラスを付ける', () => {
    const lines = ['```foolang', '<tag>', '```']
    const result = codeBlock(lines, 0, ctx)!
    expect(result.html.startsWith('<pre><code class="hljs language-foolang">')).toBe(true)
    expect(result.html).toContain('&lt;tag&gt;')
  })

  it('複数行のコードを保持し閉じフェンスの次を返す', () => {
    // 自動判定のノイズを避けるため未登録言語（エスケープのみ）で内容保持を確認
    const lines = ['```foolang', 'line1', 'line2', '```', 'after']
    const result = codeBlock(lines, 0, ctx)!
    expect(result.next).toBe(4)
    expect(result.html).toContain('line1\nline2')
  })

  it('閉じフェンスがなければ末尾まで取り込む', () => {
    const lines = ['```', 'unterminated']
    const result = codeBlock(lines, 0, ctx)!
    expect(result.next).toBe(2)
  })

  it('フェンスでない行は null を返す', () => {
    expect(codeBlock(['普通の行'], 0, ctx)).toBeNull()
  })
})
