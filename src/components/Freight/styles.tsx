import styled from 'styled-components'
import { IMaskInput } from 'react-imask'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Label = styled.span`
  font-size: 14px;
  color: black;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const Input = styled(IMaskInput)`
  width: calc(90% - 40px);
  height: 40px;
  padding-left: 20px;
  background-color: #e6e7e8;
  border: 0;

  ::placeholder {
    text-transform: uppercase;
  }
`

export const Button = styled.button`
  width: 10%;
  height: 40px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`
