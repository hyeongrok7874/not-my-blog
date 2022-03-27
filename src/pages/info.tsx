import React, {FunctionComponent} from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react"

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

type InfoPageProps = {
  data : {
    site : {
      siteMetadata : {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) => {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      {description} {author}
    </div>
  )
}

export default InfoPage;

export const metadataQuery = graphql`
  {
    site{
      siteMetadata{
        title
        description
        author
      }
    }
  }
`