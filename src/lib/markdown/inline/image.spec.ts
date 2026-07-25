import { describe, expect, it } from 'vitest'
import { applyImages } from './image'

const identity = (html: string) => html

describe('applyImages', () => {
  it('![alt](src) を <img> に変換する', () => {
    expect(applyImages('![猫](/cat.png)', identity)).toBe('<img src="/cat.png" alt="猫">')
  })

  it('alt が空でも変換する', () => {
    expect(applyImages('![](/x.png)', identity)).toBe('<img src="/x.png" alt="">')
  })

  it('画像がなければそのまま返す', () => {
    expect(applyImages('no image', identity)).toBe('no image')
  })

  it('生成した<img>を protect に渡す', () => {
    const seen: string[] = []
    applyImages('![a](/x.png)', (html) => {
      seen.push(html)
      return 'P'
    })
    expect(seen).toEqual(['<img src="/x.png" alt="a">'])
  })
})
