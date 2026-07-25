/**
 * ![alt](src) を <img> へ変換し、protect 経由でプレースホルダーへ退避する。
 * リンク変換より先に処理すること（画像記法はリンク記法を含むため）。
 * 退避により href/src が後段の強調変換に壊されない。
 */
export const applyImages = (text: string, protect: (html: string) => string): string =>
  text.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_, alt: string, src: string) => protect(`<img src="${src}" alt="${alt}">`)
  )
