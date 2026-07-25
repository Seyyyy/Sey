import type { BlockRule, ParseContext } from './types'
import { parseInline } from './inline'
import { heading } from './blocks/heading'
import { codeBlock } from './blocks/codeBlock'
import { hr } from './blocks/hr'
import { blockquote } from './blocks/blockquote'
import { list } from './blocks/list'
import { table } from './blocks/table'
import { htmlBlock } from './blocks/htmlBlock'
import { renderParagraph } from './blocks/paragraph'

// 優先順位順に適用するブロックルール。どれもマッチしなければ段落へフォールバック。
const rules: BlockRule[] = [htmlBlock, codeBlock, heading, hr, blockquote, list, table]

const ctx: ParseContext = {
  parseInline,
  parseBlocks: (lines) => parseBlocks(lines),
}

const firstMatch = (lines: string[], index: number) => {
  for (const rule of rules) {
    const result = rule(lines, index, ctx)
    if (result) return result
  }
  return null
}

const parseBlocks = (lines: string[]): string => {
  const out: string[] = []
  let i = 0

  while (i < lines.length) {
    if (lines[i].trim() === '') {
      i++
      continue
    }

    const matched = firstMatch(lines, i)
    if (matched) {
      out.push(matched.html)
      i = matched.next
      continue
    }

    // フォールバック: 空行または別ブロックの開始まで段落として集める
    const para = [lines[i]]
    i++
    while (i < lines.length && lines[i].trim() !== '' && !firstMatch(lines, i)) {
      para.push(lines[i])
      i++
    }
    out.push(renderParagraph(para, ctx))
  }

  return out.join('\n')
}

/** Markdown文字列をHTML文字列へ変換する（同期）。 */
export const markdownToHtml = (markdown: string): string => {
  const lines = markdown.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')
  return parseBlocks(lines)
}
