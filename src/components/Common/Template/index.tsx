import React, { FunctionComponent, ReactNode } from "react";
import Footer from "../Footer";
import GlobalStyle from "../GlobalStyle";
import * as S from "./style"

type TemplateProps = {
  childeren: ReactNode
}

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <S.Container>
      <GlobalStyle />
      {children}
      <Footer />
    </S.Container>
  )
}

export default Template