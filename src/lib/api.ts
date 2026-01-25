import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'
import { environment, env } from '@utils/constants/environments'

type Post = {
  slug: string
  title: string
  createdAt: string
  updatedAt: string
  tags: string[]
}

const postsDir = () => {
  if (environment.env === env.TEST) {
    return path.join(process.cwd(), 'mock-posts')
  }
  return path.join(process.cwd(), 'posts')
}

export const getPostSlugs = () => {
  const allFileName = fs
    .readdirSync(postsDir())
    .map((fileNameWithExtension) => fileNameWithExtension.replace(/\.mdx?$/, ''))
  return allFileName
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = join(postsDir(), `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data } = matter(fileContents)

  const items: Post = {
    slug: '',
    title: '',
    createdAt: '',
    updatedAt: '',
    tags: [],
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (
      field === 'title' ||
      field === 'createdAt' ||
      field === 'updatedAt' ||
      field === 'tags'
    ) {
      items[field] = data[field]
    }
  })

  return items
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort(
      (a, b) =>
        -(new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    )

  return posts
}
