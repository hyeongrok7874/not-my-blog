import React, { FunctionComponent } from "react";
import * as S from "./style"
import { IGatsbyImageData } from "gatsby-plugin-image";

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: FunctionComponent<ProfileImageProps> = ({ profileImage }) => {
  return <S.ProfileImageWrapper image={profileImage} alt="Profile Image" />
}


export default ProfileImage