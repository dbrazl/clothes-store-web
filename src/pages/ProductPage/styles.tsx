import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 20px;

  @media (min-width: 1024px) {
    gap: 40px;
    padding: 50px;
    flex-direction: row;
  }
`

export const Photo = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
`

export const ProductInfo = styled.div`
  position: sticky;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    width: 40%;
    min-width: 40%;
  }
`

export const Category = styled.span`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #808080;
`

export const ProductName = styled.h1`
  width: 100%;
  font-size: 28px;
  color: black;
  font-weight: bold;
`

export const Price = styled.span`
  width: 100%;
  font-size: 18px;
  color: black;
  font-weight: bold;
`
