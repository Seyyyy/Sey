import type { ParseContext } from '../types'

/**
 * 段落を <p> へ変換する。どのブロックルールにもマッチしなかった行を
 * オーケストレータが集めて渡す（フォールバック）。
 */
export const renderParagraph = (lines: string[], ctx: ParseContext): string =>
  `<p>${ctx.parseInline(lines.join('\n'))}</p>`
