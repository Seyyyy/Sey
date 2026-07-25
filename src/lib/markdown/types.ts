/** ブロックルールが利用できる、パーサー本体から注入されるコンテキスト。 */
export interface ParseContext {
  /** テキスト内のインライン要素（リンク・強調・コード等）をHTMLへ変換する。 */
  parseInline: (text: string) => string
  /** 行配列をブロック単位で再帰的にHTMLへ変換する（引用・リストのネスト用）。 */
  parseBlocks: (lines: string[]) => string
}

/** ブロックルールがマッチしたときの結果。html と、次に処理する行インデックス。 */
export interface BlockMatch {
  html: string
  next: number
}

/**
 * ブロックルール。lines[index] から始まるブロックを解釈できれば BlockMatch を返し、
 * 対象外なら null を返す。
 */
export type BlockRule = (
  lines: string[],
  index: number,
  ctx: ParseContext
) => BlockMatch | null
