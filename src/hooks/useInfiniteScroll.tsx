import { MutableRefObject, useMemo, useRef, useState } from "react";
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = (selectedCategory: string, posts: PostListItemType[]) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
    null,
  )
  const [count, setCount] = useState<number>(1)
  
  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      posts.filter(({ node: { frontmatter: { categories } } }: PostListItemType) =>
        selectedCategory !== 'All'
          ? categories.includes(selectedCategory)
          : true,
      ),
    [selectedCategory],
  )

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll