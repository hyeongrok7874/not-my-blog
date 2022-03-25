import React, { FunctionComponent } from 'react'
import Text from 'components/Text'

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <Text text="Home" />
      <a href='./info/'>To info</a>
    </>
  )
}

export default IndexPage;
