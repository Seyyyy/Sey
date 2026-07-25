import { protectCodeSpans } from './code'
import { applyImages } from './image'
import { applyLinks } from './link'
import { applyEmphasis } from './emphasis'

/**
 * 1行分（またはブロック内）のテキストに含まれるインライン要素をHTMLへ変換する。
 *
 * コードスパン・画像・リンクは生成時にプレースホルダーへ退避（protect）し、
 * 強調変換はその「素のテキスト」部分にのみ適用する。これにより、
 * URL やコード内の記号（例: pull_request_target の _）が強調変換で壊れない。
 *
 * 変換順序:
 *   1. コードスパンを退避
 *   2. ハードブレイク（行末2スペース→<br>）
 *   3. 画像を退避（リンク記法を含むため先に）
 *   4. リンクを退避（ラベルには強調を適用）
 *   5. 残りのテキストに強調を適用
 *   6. 退避したものを復元（ネスト対応のため無くなるまで）
 */
export const parseInline = (text: string): string => {
  const slots: string[] = []
  // マークダウン記号を含まず、本文と衝突しないセンチネル
  const protect = (html: string) => {
    slots.push(html)
    return `@@SLOT${slots.length - 1}@@`
  }

  let result = text
  result = protectCodeSpans(result, protect)
  result = result.replace(/ {2,}\n/g, '<br>\n').replace(/ +$/, '')
  result = applyImages(result, protect)
  result = applyLinks(result, protect, applyEmphasis)
  result = applyEmphasis(result)

  // ネスト（リンク内のコードスパン等）に対応するため、無くなるまで復元する
  let prev: string
  do {
    prev = result
    result = result.replace(/@@SLOT(\d+)@@/g, (_, i: string) => slots[Number(i)])
  } while (result !== prev)

  return result
}
