import React, { FunctionComponent } from "react";
import ProfileImage from "../ProfileImage";
import * as S from "./style"

const Introduction: FunctionComponent = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <ProfileImage />
        <div>
          <S.SubTitle>Nice to Meet You,</S.SubTitle>
          <S.Title>I'm Junior Frontend Developer Kim.</S.Title>
        </div>
      </S.Wrapper>
    </S.Background>
  )
}

export default Introduction;