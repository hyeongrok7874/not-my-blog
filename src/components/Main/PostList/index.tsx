import React, { FunctionComponent, useMemo } from "react";
import PostItem from "../PostItem";
import * as S from "./style"
import { PostListItemType } from "types/PostItem.types"

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({ selectedCategory, posts }) => {
  const postListData = useMemo(
    () => 
      posts.filter(({ node: { frontmatter: { categories } } }: PostListItemType) => 
        selectedCategory !== 'All'
          ? categories.includes(selectedCategory)
          : true,
      ),
    [selectedCategory]
  )

  return (
    <S.PostListWrapper>
      {postListData.map(({ node: { id, frontmatter }}:PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </S.PostListWrapper>
  )
}

export default PostList