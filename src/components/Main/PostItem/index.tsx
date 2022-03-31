import React, { FunctionComponent } from "react";
import { PostFrontmatterType } from "types/PostItem.types";
import * as S from "./style"

type PostItemProps = PostFrontmatterType & { link: string }

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
        <S.Category>
          {categories.map(category => (
            <S.CategoryItem key={category}>{category}</S.CategoryItem>
          ))}
        </S.Category>
        <S.Summary>{summary}</S.Summary>
      </S.PostItemContent>
    </S.PostItemWrapper>)
}

export default PostItem;