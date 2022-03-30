import React, {FunctionComponent} from "react";

type PostItemProps = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: string
  link: string
}

const PostItem:FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link
}) => {
  return <div />
}

export default PostItem;