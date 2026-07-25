import type { BlockRule } from '../types'

/**
 * 引用（> ...）を <blockquote> へ変換する。連続する引用行をまとめ、
 * 「> 」を取り除いた中身をブロックとして再帰処理する（引用内の段落・リスト等に対応）。
 */
export const blockquote: BlockRule = (lines, index, ctx) => {
  if (!/^>/.test(lines[index])) return null

  const inner: string[] = []
  let i = index
  while (i < lines.length && /^>/.test(lines[i])) {
    inner.push(lines[i].replace(/^> ?/, ''))
    i++
  }

  return { html: `<blockquote>${ctx.parseBlocks(inner)}</blockquote>`, next: i }
}
