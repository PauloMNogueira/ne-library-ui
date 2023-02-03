import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { fortalezaTheme, riomarRecifeTheme } from '../Theme'
import ButtonComponent from './ButtonComponent'
type Props = {
  onClick?: any
}
const Button = ({ onClick }: Props) => {
  const [theme, setTheme] = useState(riomarRecifeTheme)
  const updateTheme = () => {
    setTheme(fortalezaTheme)
  }
  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent onClick={onClick}></ButtonComponent>
      <div>
        <button onClick={updateTheme}>Trocar para tema fortaleza</button>
      </div>
    </ThemeProvider>
  )
}

export default Button
