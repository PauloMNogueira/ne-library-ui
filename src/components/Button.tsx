import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StartTheme } from '../Theme/start'
import ButtonComponent from './ButtonComponent'
type Props = {
  onClick?: any
}
const Button = ({ onClick }: Props) => {
  const theme = StartTheme().getTheme()

  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent onClick={onClick}></ButtonComponent>
    </ThemeProvider>
  )
}

export default Button
