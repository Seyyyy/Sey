import type { BlockRule } from '../types'

/** HTMLタグ・閉じタグ・コメントで始まる行かどうか。 */
const isHtmlStart = (line: string) => /^\s*<\/?[a-zA-Z!]/.test(line)

/**
 * ブロックレベルの生HTMLを空行までそのまま透過する（現状の allowDangerousHtml 相当）。
 * エスケープもインライン変換も行わない。
 */
export const htmlBlock: BlockRule = (lines, index) => {
  if (!isHtmlStart(lines[index])) return null

  const buffer: string[] = []
  let i = index
  while (i < lines.length && lines[i].trim() !== '') {
    buffer.push(lines[i])
    i++
  }

  return { html: buffer.join('\n'), next: i }
}
