import React, {FunctionComponent} from "react";
import { graphql } from "gatsby";
import { Global, css } from "@emotion/react"

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
      {title} {description} {author}
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