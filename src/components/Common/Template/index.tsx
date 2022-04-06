import React, { FunctionComponent, ReactNode } from "react";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import GlobalStyle from "../GlobalStyle";
import * as S from "./style"

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  childeren: ReactNode
}

const Template: FunctionComponent<TemplateProps> = ({ 
  title,
  description,
  url,
  image,
  children
}) => {
  return (
    <S.Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="hyeongrok" />
        <meta name="twitter:creator" content="hyeongrok" />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </S.Container>
  )
}

export default Template