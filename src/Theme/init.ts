import { createContext, useContext } from 'react'

export type GlobalContent = {
  shopping: string
}

export const MyGlobalContext = createContext<GlobalContent>({
  shopping: 'riomarRecife',
})

export const useGlobalContext = () => useContext(MyGlobalContext)
