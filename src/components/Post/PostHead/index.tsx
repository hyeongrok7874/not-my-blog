import React, { FunctionComponent } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import PostHeadInfo, {PostHeadInfoProps} from "../PostHeadInfo";
import * as S from "./style"

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

export type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

const PostHead: FunctionComponent<PostHeadProps> = ({
  title,
  date,
  categories,
  thumbnail
}) => {
  return (
    <S.PostHeadWrapper>
      <S.BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </S.PostHeadWrapper>
  )
}

export default PostHead