import { describe, expect, it } from 'vitest'
import { markdownToHtml } from './index'

describe('markdownToHtml（統合）', () => {
  it('見出しと段落を変換する', () => {
    expect(markdownToHtml('# タイトル\n\n本文です')).toBe('<h1>タイトル</h1>\n<p>本文です</p>')
  })

  it('箇条書きを変換する', () => {
    expect(markdownToHtml('- a\n- b')).toBe('<ul><li>a</li><li>b</li></ul>')
  })

  it('コードブロックを変換する', () => {
    const html = markdownToHtml('```js\nconst x = 1;\n```')
    expect(html.startsWith('<pre><code class="hljs language-js">')).toBe(true)
    expect(html).toContain('hljs-keyword')
  })

  it('インライン要素を含む段落を変換する', () => {
    expect(markdownToHtml('**太字**と`code`')).toBe(
      '<p><strong>太字</strong>と<code>code</code></p>'
    )
  })

  it('空行で区切られた複数ブロックを順に変換する', () => {
    expect(markdownToHtml('段落1\n\n段落2')).toBe('<p>段落1</p>\n<p>段落2</p>')
  })

  it('空行なしで見出しが段落に続く場合、見出しで段落を切る', () => {
    expect(markdownToHtml('本文\n## 見出し')).toBe('<p>本文</p>\n<h2>見出し</h2>')
  })

  it('引用を変換する', () => {
    expect(markdownToHtml('> 引用文')).toBe('<blockquote><p>引用文</p></blockquote>')
  })

  it('CRLF改行を正規化する', () => {
    expect(markdownToHtml('# A\r\n\r\nB')).toBe('<h1>A</h1>\n<p>B</p>')
  })

  it('生HTMLをそのまま透過する', () => {
    expect(markdownToHtml('<div>raw</div>')).toBe('<div>raw</div>')
  })

  it('空文字は空文字を返す', () => {
    expect(markdownToHtml('')).toBe('')
  })
})
