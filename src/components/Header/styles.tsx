import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 72px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding: 20px 45px;
    justify-content: flex-start;
  }
`

export const LogoLink = styled(Link)`
  width: min-content;
  height: 72px;
  padding: 20px 0;
`

export const Logo = styled.img`
  width: auto;
  height: 100%;
`

export const Categories = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-left: 50px;
  }
`

interface CategoryProp {
  highlight?: boolean
}

export const Category = styled(Link)<CategoryProp>`
  font-size: 12px;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  ${({ highlight }) =>
    highlight &&
    css`
     color: #9F2B5E;
  `}

  :hover {
    text-decoration: underline;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 1024px) {
    margin-left: auto;
  }
`

interface IButton {
  hiddenOnWeb?: boolean
}

export const Button = styled.button<IButton>`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 1024px) {
    ${({ hiddenOnWeb }) =>
      hiddenOnWeb && css`
        display: none;
    `}
  }
`
