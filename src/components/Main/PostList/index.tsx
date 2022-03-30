import React, { FunctionComponent } from "react";
import PostItem from "../PostItem";
import * as S from "./style"

const POST_ITEM_DATA = {
  title: '게시글 제목',
  date: '2022.03.30.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_KR?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1647363032344',
  link: 'https://github.com/hyeongrok7874/',
}

const PostList: FunctionComponent = () => {
  return (
    <S.PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </S.PostListWrapper>
  )
}

export default PostList