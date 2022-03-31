import React, { FunctionComponent } from "react";
import PostItem from "../PostItem";
import * as S from "./style"
import { PostListItemType} from "types/PostItem.types"

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({posts}) => {
  return (
    <S.PostListWrapper>
      {posts.map(({ node: { id, frontmatter }}:PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
        )
      )}
    </S.PostListWrapper>
  )
}

export default PostList