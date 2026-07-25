import type { BlockRule, ParseContext } from '../types'

const hasPipe = (line: string) => line.includes('|')
const isSeparator = (line: string) => /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(line)

/** 「| a | b |」形式の行をセル配列へ分解する。前後のパイプ由来の空要素は除く。 */
const splitCells = (line: string): string[] =>
  line
    .trim()
    .replace(/^\||\|$/g, '')
    .split('|')
    .map((c) => c.trim())

const renderRow = (line: string, tag: 'th' | 'td', ctx: ParseContext): string =>
  '<tr>' +
  splitCells(line)
    .map((cell) => `<${tag}>${ctx.parseInline(cell)}</${tag}>`)
    .join('') +
  '</tr>'

/**
 * GFMテーブル（ヘッダ行 + 区切り行 + 本文行）を <table> へ変換する。
 * 2行目が区切り行（--- を含む）でなければテーブルとみなさない。
 */
export const table: BlockRule = (lines, index, ctx) => {
  const header = lines[index]
  const separator = lines[index + 1]
  if (!header || !hasPipe(header)) return null
  if (!separator || !isSeparator(separator)) return null

  let i = index + 2
  const bodyRows: string[] = []
  while (i < lines.length && lines[i].trim() !== '' && hasPipe(lines[i])) {
    bodyRows.push(renderRow(lines[i], 'td', ctx))
    i++
  }

  const thead = `<thead>${renderRow(header, 'th', ctx)}</thead>`
  const tbody = `<tbody>${bodyRows.join('')}</tbody>`
  return { html: `<table>${thead}${tbody}</table>`, next: i }
}
