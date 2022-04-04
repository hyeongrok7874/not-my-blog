import React, { FunctionComponent, useMemo } from "react";
import PostItem from "../PostItem";
import * as S from "./style"
import { PostListItemType } from "types/PostItem.types"
import useInfiniteScroll from "hooks/useInfiniteScroll"

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({ selectedCategory, posts }) => {
  const { containRef } = useInfiniteScroll(selectedCategory, posts)

  return (
    <S.PostListWrapper ref={containRef}>
      {posts.map(({ node: { id, frontmatter }}:PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </S.PostListWrapper>
  )
}

export default PostList