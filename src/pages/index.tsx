import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import ProfileImage from 'components/Main/ProfileImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = () => {
  return (
    <Container>
      <GlobalStyle />
      <ProfileImage />
    </Container>
  )
}

export default IndexPage;
