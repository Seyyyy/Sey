import { describe, expect, it } from 'vitest'
import { protectCodeSpans } from './code'

// protect はテストでは受け取ったHTMLをそのまま返す（退避せず可視化）
const identity = (html: string) => html

describe('protectCodeSpans', () => {
  it('コードスパンを <code> に変換する', () => {
    expect(protectCodeSpans('use `const x = 1` here', identity)).toBe(
      'use <code>const x = 1</code> here'
    )
  })

  it('コードスパン内のHTML特殊文字をエスケープする', () => {
    expect(protectCodeSpans('run `a < b && c`', identity)).toBe(
      'run <code>a &lt; b &amp;&amp; c</code>'
    )
  })

  it('複数のコードスパンを個別に扱う', () => {
    expect(protectCodeSpans('`a` and `b`', identity)).toBe('<code>a</code> and <code>b</code>')
  })

  it('protect に生成HTMLを渡す', () => {
    const seen: string[] = []
    protectCodeSpans('`x`', (html) => {
      seen.push(html)
      return 'P'
    })
    expect(seen).toEqual(['<code>x</code>'])
  })
})
