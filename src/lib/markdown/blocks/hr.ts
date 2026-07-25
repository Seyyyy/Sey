import type { BlockRule } from '../types'

/** 水平線（---, ***, ___ を3文字以上）を <hr> へ変換する。 */
export const hr: BlockRule = (lines, index) => {
  if (/^(-{3,}|\*{3,}|_{3,})$/.test(lines[index].trim())) {
    return { html: '<hr>', next: index + 1 }
  }
  return null
}
