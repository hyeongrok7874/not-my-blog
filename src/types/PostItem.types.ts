export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    publicURL: string
  }
}

export type PostListItemType = {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}