import { describe, expect, it } from 'vitest'
import { parseInline } from './index'

describe('parseInline', () => {
  it('複数のインライン要素を組み合わせて変換する', () => {
    expect(parseInline('**太字** と `code` と [link](/a)')).toBe(
      '<strong>太字</strong> と <code>code</code> と <a href="/a">link</a>'
    )
  })

  it('コードスパン内の強調記号は変換しない', () => {
    expect(parseInline('`**not bold**`')).toBe('<code>**not bold**</code>')
  })

  it('リンクのテキスト内の強調は変換する', () => {
    expect(parseInline('[**bold**](/a)')).toBe('<a href="/a"><strong>bold</strong></a>')
  })

  it('画像はリンクとして誤変換されない', () => {
    expect(parseInline('![alt](/img.png)')).toBe('<img src="/img.png" alt="alt">')
  })

  it('行末2スペース＋改行をハードブレイク<br>に変換する', () => {
    expect(parseInline('分析的  \n継続行')).toBe('分析的<br>\n継続行')
  })

  it('行末以外の通常の改行（ソフトブレイク）はそのまま残す', () => {
    expect(parseInline('a\nb')).toBe('a\nb')
  })

  it('文末の余分なスペースは<br>にせず除去する', () => {
    expect(parseInline('末尾  ')).toBe('末尾')
  })

  it('URL内のアンダースコアを強調変換で壊さない', () => {
    expect(parseInline('[x](https://e.com/pull_request_target)')).toBe(
      '<a href="https://e.com/pull_request_target">x</a>'
    )
  })

  it('URL内のアスタリスクを強調変換で壊さない', () => {
    expect(parseInline('[x](https://e.com/a*b*c)')).toBe('<a href="https://e.com/a*b*c">x</a>')
  })

  it('山括弧で囲まれたリンク先の< >を除去し、内部の括弧も保持する', () => {
    expect(parseInline('[t](<https://e.com/x(y)z>)')).toBe('<a href="https://e.com/x(y)z">t</a>')
  })

  it('リンク内のコードスパンを保持する', () => {
    expect(parseInline('[`c`](/a)')).toBe('<a href="/a"><code>c</code></a>')
  })
})
