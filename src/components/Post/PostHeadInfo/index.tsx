import React, {FunctionComponent} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import * as S from "./style"

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = ({
  title,
  date,
  categories
}) => {
  const goBackPage = () => window.history.back()

  return (
    <S.PostHeadInfoWrapper>
      <S.PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </S.PrevPageIcon>
      <S.Title>{title}</S.Title>
      <S.PostData>
        <div>{categories.join('/')}</div>
        <div>{date}</div>
      </S.PostData>
    </S.PostHeadInfoWrapper>
  )
}

export default PostHeadInfo