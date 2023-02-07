import React from 'react'
import { ThemeProvider } from 'styled-components'
import { fortalezaTheme } from '../Theme/fortalezaTheme'
import ButtonComponent from './ButtonComponent'
type Props = {
  onClick?: any
}
const Button = ({ onClick }: Props) => {
  // const theme = StartTheme().getTheme()

  return (
    <ThemeProvider theme={fortalezaTheme}>
      <ButtonComponent onClick={onClick}>CLIQUE</ButtonComponent>
    </ThemeProvider>
  )
}

export default Button
