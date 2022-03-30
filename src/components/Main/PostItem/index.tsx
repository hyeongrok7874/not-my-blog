import React, { FunctionComponent } from "react";
import * as S from "./style"

type PostItemProps = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    publicURL: string
  }
  link: string
}

const PostItem:FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {publicURL},
  link
}) => {
  return (
    <S.PostItemWrapper to={link}>
      <S.ThumbnailImage src={publicURL} alt="Post Item Image" />
      <S.PostItemContent>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        <S.Category>{categories}</S.Category>
        <S.Summary>{summary}</S.Summary>
      </S.PostItemContent>
    </S.PostItemWrapper>)
}

export default PostItem;