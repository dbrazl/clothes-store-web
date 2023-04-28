import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 1024px) {
    padding: 100px 50px;
  }
`

export const Page = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  & + & {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Product = styled(Link)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
`
export const Photo = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 400px;
  }
`

export const Category = styled.p`
  margin-top: 20px;
  font-size: 10px;
  color: #808080;
`

export const Name = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: black;
  font-weight: bold;
`

export const Price = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: black;
  font-weight: bold;
`
