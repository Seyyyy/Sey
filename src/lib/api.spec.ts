import { describe, expect, it } from 'vitest'
import { getPostSlugs, getPostBySlug, getAllPosts } from './api'

describe('postディレクトリからブログを取得する', () => {
  it('postディレクトリからpathを識別するためのslugを取得する', () => {
    const result = getPostSlugs()
    expect(result).toEqual(['sample', 'sample2'])
  })

  describe('マークダウンからブログの内容を取得する', () => {
    it('マークダウンから選択したslugのタイトルを取得', () => {
      const result = getPostBySlug('sample2', ['title'])
      expect(result.title).toBe('sample')
    })

    it('マークダウンから選択したslugの本文を取得', () => {
      const result = getPostBySlug('sample2', ['content'])
      expect(result.content).toBe(['', '# Sample', '', 'sample', ''].join('\n'))
    })

    it('マークダウンから選択したslugの作成日を取得', () => {
      const result = getPostBySlug('sample2', ['createdAt'])
      expect(result.createdAt).toBe('2029/11/12')
    })

    it('マークダウンから選択したslugの更新日を取得', () => {
      const result = getPostBySlug('sample2', ['updatedAt'])
      expect(result.updatedAt).toBe('2030/3/20')
    })

    it('マークダウンから選択したslugのタグを取得', () => {
      const result = getPostBySlug('sample2', ['tags'])
      expect(result.tags).toEqual(['test1', 'test2'])
    })
  })

  it('作成日の降順に取得する', () => {
    // fieldsにcreatedAtを指定しないと降順にならない
    const result = getAllPosts(['slug', 'createdAt'])
    expect([result[0].slug, result[1].slug]).toEqual(['sample2', 'sample'])
  })
})
