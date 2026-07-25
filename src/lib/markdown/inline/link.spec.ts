import { describe, expect, it } from 'vitest'
import { applyLinks } from './link'

const identity = (html: string) => html
const labelAsIs = (label: string) => label

describe('applyLinks', () => {
  it('[text](href) を <a> に変換する', () => {
    expect(applyLinks('[Google](https://google.com)', identity, labelAsIs)).toBe(
      '<a href="https://google.com">Google</a>'
    )
  })

  it('複数のリンクを変換する', () => {
    expect(applyLinks('[a](/a) と [b](/b)', identity, labelAsIs)).toBe(
      '<a href="/a">a</a> と <a href="/b">b</a>'
    )
  })

  it('山括弧で囲まれたリンク先の< >を除去し内部の括弧を保持する', () => {
    expect(applyLinks('[t](<https://e.com/x(y)z>)', identity, labelAsIs)).toBe(
      '<a href="https://e.com/x(y)z">t</a>'
    )
  })

  it('ラベルに renderLabel を適用する', () => {
    expect(applyLinks('[abc](/a)', identity, (l) => l.toUpperCase())).toBe(
      '<a href="/a">ABC</a>'
    )
  })

  it('リンクがなければそのまま返す', () => {
    expect(applyLinks('plain', identity, labelAsIs)).toBe('plain')
  })
})
