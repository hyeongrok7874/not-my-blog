import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src="" alt="Profile Image" />
}

export default ProfileImage