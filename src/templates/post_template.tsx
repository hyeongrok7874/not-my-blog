import React, { FunctionComponent } from "react";
import {graphql} from 'gatsby'
import Template from "components/Common/Template";

type PostTemplateProps = {}

const PostTemplate: FunctionComponent<PostTemplateProps> = (props) => {
  console.log(props)

  return <Template>Post Template</Template>
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`