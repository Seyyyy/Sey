import type { BlockRule } from '../types'

/** ATX見出し（# 〜 ######）を <h1>〜<h6> へ変換する。 */
export const heading: BlockRule = (lines, index, ctx) => {
  const match = /^(#{1,6}) +(.*)$/.exec(lines[index])
  if (!match) return null
  const level = match[1].length
  const content = ctx.parseInline(match[2].trim())
  return { html: `<h${level}>${content}</h${level}>`, next: index + 1 }
}
