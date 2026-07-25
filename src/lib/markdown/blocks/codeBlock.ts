import hljs from 'highlight.js'
import type { BlockRule } from '../types'
import { escapeHtml } from '../escape'

const FENCE = /^```(\S*)\s*$/

/**
 * フェンスコードブロック（```lang ... ```）を <pre><code> へ変換する。
 * 言語が highlight.js に登録されていればシンタックスハイライトを適用し、
 * それ以外はHTMLエスケープのみ行う（現状の rehype-highlight と同じ hljs クラス出力）。
 */
export const codeBlock: BlockRule = (lines, index) => {
  const open = FENCE.exec(lines[index])
  if (!open) return null

  const lang = open[1]
  const body: string[] = []
  let i = index + 1
  while (i < lines.length && !FENCE.test(lines[i])) {
    body.push(lines[i])
    i++
  }
  // 閉じフェンスがあればその次へ、なければ末尾まで消費
  const next = i < lines.length ? i + 1 : i

  const code = body.join('\n')
  let inner: string
  let className: string

  if (lang && hljs.getLanguage(lang)) {
    inner = hljs.highlight(code, { language: lang, ignoreIllegals: true }).value
    className = `hljs language-${lang}`
  } else if (lang) {
    // 未登録の言語は色付けせずエスケープのみ
    inner = escapeHtml(code)
    className = `hljs language-${lang}`
  } else {
    // 言語未指定は自動判定（現状の rehype-highlight detect:true 相当）
    const auto = hljs.highlightAuto(code)
    inner = auto.value
    className = auto.language ? `hljs language-${auto.language}` : 'hljs'
  }

  return { html: `<pre><code class="${className}">${inner}</code></pre>`, next }
}
