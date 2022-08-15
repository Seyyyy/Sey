import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'

type Post = {
  slug: string
  content: string
  title: string
  date: string
}

const postsDir = path.join(process.cwd(), 'posts')

export const getPostSlugs = () => {
  const allFileName = fs
    .readdirSync(postsDir)
    .map((fileNameWithExtension) => fileNameWithExtension.replace(/\.md$/, ''))
  return allFileName
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = join(postsDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  const items: Post = {
    slug: '',
    content: '',
    title: '',
    date: '',
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'title' || field === 'date') {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}
