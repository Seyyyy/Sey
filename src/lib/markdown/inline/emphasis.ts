/**
 * 強調記号をHTMLへ変換する。太字（** / __）を斜体（* / _）より先に処理し、
 * 二重変換を防ぐ。
 */
export const applyEmphasis = (text: string): string =>
  text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/__([^_]+)__/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/_([^_]+)_/g, '<em>$1</em>')
