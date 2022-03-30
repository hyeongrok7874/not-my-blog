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
    '<https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fkr%2Fshop%2Fbuy-mac%2Fmacbook-pro%2F14%25ED%2598%2595&psig=AOvVaw3s8vwiNEjYzRxIKsQ1c0sv&ust=1648718953612000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDTo-7C7fYCFQAAAAAdAAAAABAG>',
  link: '<https://github.com/hyeongrok7874/>',
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