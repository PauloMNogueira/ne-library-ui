import styled from 'styled-components'
enum VARIANT {
  PRIMARY,
  SECONDARY,
}
interface IProps {
  variant?: VARIANT
}
const ButtonComponent = styled.button<IProps>`
  margin: 8px;
  border-radius: ${(props) => props.theme.borderRadius};
  ${(props) => {
    switch (props.variant) {
      case VARIANT.SECONDARY:
        return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `
      case VARIANT.PRIMARY:
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `
    }
  }}
`
export default ButtonComponent
