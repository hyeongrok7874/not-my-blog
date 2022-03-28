import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const PROFILE_IMAGE_LINK = 'https://avatars.githubusercontent.com/u/80103328?v=4'

const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage