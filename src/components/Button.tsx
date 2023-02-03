import React from 'react'

type Props = {
  onClick?: any
}
const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>CLique</button>
}

export default Button
