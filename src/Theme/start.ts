import { useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { fortalezaTheme } from './fortalezaTheme'
import { riomarRecifeTheme } from './riomarrecife'

export const StartTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(riomarRecifeTheme)

  const setInitTheme = (theme: string) => {
    let themeDefault = riomarRecifeTheme
    if (theme == 'riomarrecife') {
      themeDefault = riomarRecifeTheme
    }

    if (theme == 'fortaleza') {
      themeDefault = fortalezaTheme
    }
    setTheme(themeDefault)
  }

  const getTheme = () => {
    return theme
  }

  return {
    setInitTheme,
    getTheme,
  }
}
