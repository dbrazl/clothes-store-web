import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  height: 72px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 768px) {
    padding: 20px 45px;
  }
`
export const Breadcrumb = styled(Link)`
  font-size: 12px;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  & + & {
    ::before {
      content: '>';
      margin: 0 20px;
      cursor: auto;
    }
  }
`
