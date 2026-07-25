import type { BlockRule, ParseContext } from '../types'

interface Item {
  indent: number
  ordered: boolean
  text: string
}

const matchItem = (line: string): Item | null => {
  const m = /^(\s*)([-*+]|\d+\.) +(.*)$/.exec(line)
  if (!m) return null
  return { indent: m[1].length, ordered: /\d/.test(m[2]), text: m[3] }
}

const leadingSpaces = (line: string) => /^\s*/.exec(line)![0].length

/**
 * lines[start] から始まる、同一インデント・同一種別のリストを1つ解析する。
 * より深くインデントされた項目は、その項目内の子リストとして再帰的に処理する。
 */
const parseList = (
  lines: string[],
  start: number,
  ctx: ParseContext
): { html: string; next: number } => {
  const first = matchItem(lines[start])!
  const baseIndent = first.indent
  const ordered = first.ordered
  const tag = ordered ? 'ol' : 'ul'

  const items: string[] = []
  let i = start

  while (i < lines.length) {
    if (lines[i].trim() === '') break
    const m = matchItem(lines[i])
    if (!m || m.indent !== baseIndent || m.ordered !== ordered) break

    const textLines = [m.text]
    let nestedHtml = ''
    i++

    // この項目に属する、より深くインデントされた行を集める。
    // - 継続行（非リスト）は項目テキストに結合
    // - 子リスト（リスト項目）は再帰処理して項目の後ろに追加
    while (i < lines.length && lines[i].trim() !== '' && leadingSpaces(lines[i]) > baseIndent) {
      if (matchItem(lines[i])) {
        const nestedStart = i
        i++
        while (i < lines.length && lines[i].trim() !== '' && leadingSpaces(lines[i]) > baseIndent) {
          i++
        }
        nestedHtml += parseList(lines.slice(nestedStart, i), 0, ctx).html
      } else {
        textLines.push(lines[i].trim())
        i++
      }
    }

    const content = ctx.parseInline(textLines.join('\n')) + nestedHtml
    items.push(`<li>${content}</li>`)
  }

  return { html: `<${tag}>${items.join('')}</${tag}>`, next: i }
}

/** 箇条書き（- * +）と番号リスト（1.）を <ul>/<ol> へ変換する。ネスト対応。 */
export const list: BlockRule = (lines, index, ctx) => {
  if (!matchItem(lines[index])) return null
  return parseList(lines, index, ctx)
}
