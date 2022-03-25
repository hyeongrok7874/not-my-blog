import React, { FunctionComponent } from 'react'

type TextProps = {
  text: string
}

const Text: FunctionComponent<TextProps> = ({ text }) => {
  return <div>{text}</div>
} 

export default Text
