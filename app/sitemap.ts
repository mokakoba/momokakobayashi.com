import { getNotes, getStories } from 'app/notes/utils'

export const baseUrl = 'https://momokakobayashi.com'

export default async function sitemap() {
  let notes = getNotes().map((post) => ({
    url: `${baseUrl}/notes/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let stories = getStories().map((post) => ({
    url: `${baseUrl}/stories/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/about', '/notes', '/stories', '/maps', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...notes, ...stories]
}
