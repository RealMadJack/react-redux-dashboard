import { css } from 'styled-components'

const buttonStyles = css`
  display: inline-flex;
  flex-direction: row
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 6px 10px;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 13px;
  background: #41addd;
  color: #fff;
  border: 1px solid #009BDD;
  transition: all .1s ease-in-out;

  &:active, &:focus {
    border-color: #222222;
    background: #222222;
    color: #fff;
  }
  &:not(:first-child) {
    margin-left: 6px;
  }
`

export default buttonStyles
