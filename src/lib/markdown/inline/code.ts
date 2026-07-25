import { escapeHtml } from '../escape'

/**
 * コードスパン（`...`）を <code>（内容はHTMLエスケープ済み）に変換し、
 * protect 経由でプレースホルダーへ退避する。退避により、後段のリンク・強調変換が
 * コードスパンの内部（記号やURL）に影響しない。
 */
export const protectCodeSpans = (text: string, protect: (html: string) => string): string =>
  text.replace(/`([^`]+)`/g, (_, content: string) => protect(`<code>${escapeHtml(content)}</code>`))
