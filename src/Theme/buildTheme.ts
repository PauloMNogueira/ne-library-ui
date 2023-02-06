import { StartTheme } from './start'

type Props = {
  shopping: string
}
const BuildTheme = ({ shopping }: Props) => {
  console.log('OI', shopping)
  StartTheme().setInitTheme(shopping)
}

export default BuildTheme
