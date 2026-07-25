/**
 * [text](href) を <a> へ変換し、protect 経由でプレースホルダーへ退避する。
 * - リンク先が <...> で囲まれている場合は山括弧を除去し、内部の括弧も保持する
 * - ラベルは renderLabel でインライン変換（強調など）を適用する
 * - href は退避されるため、後段の強調変換で壊れない
 * 画像変換の後に処理すること。
 */
export const applyLinks = (
  text: string,
  protect: (html: string) => string,
  renderLabel: (label: string) => string
): string => {
  const anchor = (label: string, href: string) =>
    protect(`<a href="${href}">${renderLabel(label)}</a>`)

  // 山括弧囲みのリンク先（内部に括弧を含められる）: [label](<href>)
  let result = text.replace(
    /\[([^\]]+)\]\(<([^>]*)>\)/g,
    (_, label: string, href: string) => anchor(label, href)
  )
  // 通常のリンク先: [label](href)
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, label: string, href: string) => anchor(label, href)
  )
  return result
}
