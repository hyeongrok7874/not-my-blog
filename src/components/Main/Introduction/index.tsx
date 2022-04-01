import React, { FunctionComponent} from "react";
import ProfileImage from "../ProfileImage";
import * as S from "./style"
import { IGatsbyImageData } from "gatsby-plugin-image";

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <S.Background>
      <S.Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <S.SubTitle>Nice to Meet You,</S.SubTitle>
          <S.Title>I'm Junior Frontend Developer Kim.</S.Title>
        </div>
      </S.Wrapper>
    </S.Background>
  )
}

export default Introduction;