import React, { FunctionComponent } from "react";
import PostItem from "../PostItem";
import * as S from "./style"
import { PostListItemType } from "types/PostItem.types"
import useInfiniteScroll, {useInfiniteScrollType} from "hooks/useInfiniteScroll"

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({ selectedCategory, posts }) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(selectedCategory, posts)

  return (
    <S.PostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, fields: { slug },frontmatter }}:PostListItemType) => (
        <PostItem {...frontmatter} link={slug} key={id} />
      ))}
    </S.PostListWrapper>
  )
}

export default PostList