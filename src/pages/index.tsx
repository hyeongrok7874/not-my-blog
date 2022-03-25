import React, { FunctionComponent } from 'react'
import Text from 'components/Text'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <Text text="Home" />
      <Link to='/info/'>To info</Link>
    </>
  )
}

export default IndexPage;
