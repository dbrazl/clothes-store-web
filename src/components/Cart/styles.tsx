import styled, { css } from 'styled-components'

interface IContainer {
  open?: boolean
}

export const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  transition: 500ms ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 1024px) {
    width: 40%;
    padding-left: 50px;
  }

  ${({ open }) =>
    open && css`
      right: 0;
    `}
`
export const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  margin-left: auto;
`

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin-bottom: 50px;
`
