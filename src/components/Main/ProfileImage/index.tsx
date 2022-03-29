import React, { FunctionComponent } from "react";
import * as S from "./style"

const PROFILE_IMAGE_LINK = 'https://avatars.githubusercontent.com/u/80103328?v=4'

const ProfileImage: FunctionComponent = () => (
  <S.ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
)

export default ProfileImage