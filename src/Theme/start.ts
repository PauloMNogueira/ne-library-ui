import { useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { fortalezaTheme } from './fortalezaTheme'
import { riomarRecifeTheme } from './riomarrecife'

export const StartTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(riomarRecifeTheme)

  const setInitTheme = (theme: string) => {
    console.log(`Setando theme: ${theme}`)
    let themeDefault = riomarRecifeTheme
    if (theme == 'riomarrecife') {
      themeDefault = riomarRecifeTheme
    }

    if (theme == 'fortaleza') {
      themeDefault = fortalezaTheme
    }
    console.log(`themeDefault: ${themeDefault}`)
    setTheme(themeDefault)
  }

  const getTheme = () => {
    console.log(`GET THEME: ${theme}`)
    return theme
  }

  return {
    setInitTheme,
    getTheme,
  }
}
