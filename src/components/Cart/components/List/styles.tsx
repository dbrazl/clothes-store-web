import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`

export const Product = styled.li`
  width: 100%;
  height: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`

export const Image = styled.img`
  width: 200px;
  height: calc(200px * 9/16);
  object-fit: contain;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`

export const Name = styled.span`
  width: 100%;
  font-size: 18px;
  color: black;
  font-weight: bold;
`
