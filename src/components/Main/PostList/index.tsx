import React, { FunctionComponent } from "react";
import PostItem from "../PostItem";
import * as S from "./style"
import { PostListItemType} from "types/PostItem.types"

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = ({posts}) => {
  return (
    <S.PostListWrapper>
      {posts.map(({ node: { id, frontmatter }}:PostListItemType) => (
          <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
        )
      )}
    </S.PostListWrapper>
  )
}

export default PostList