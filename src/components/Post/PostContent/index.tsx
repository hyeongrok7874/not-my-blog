import React, { FunctionComponent } from "react"
import * as S from "./style"

interface PostContentProps {
  html: string
}

const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  return (
    <S.MarkdownRenderer dangerouslySetInnerHTML={{__html:html}}/>
  )
}

export default PostContent