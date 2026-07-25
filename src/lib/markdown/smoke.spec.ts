import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { markdownToHtml } from './index'

const postsDir = path.resolve(__dirname, '../../../posts')
const files = readdirSync(postsDir).filter((f) => f.endsWith('.md'))

describe('実投稿スモークテスト', () => {
  it('全投稿が存在する', () => {
    expect(files.length).toBeGreaterThan(0)
  })

  it.each(files)('%s をクラッシュせず変換できる', (file) => {
    const raw = readFileSync(path.join(postsDir, file), 'utf-8')
    const { content } = matter(raw)
    const html = markdownToHtml(content)
    expect(typeof html).toBe('string')
    // 生Markdown記号が大量に残っていないことの粗いチェック
    expect(html).not.toContain('```')
  })
})
