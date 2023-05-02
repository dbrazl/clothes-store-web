import React, { useContext, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useMutation } from 'react-query'

import { CartContext } from 'store/states/cart/state'
import { Actions } from 'store/states/cart/@types/actions'

import { api2 } from 'services/api'
import { type ICartProduct, type ICreatePreference } from 'models/Shelf'

import Button from 'components/Button'
import Freight from 'components/Freight'
import { Empty, List } from './components'
import { CloseButton, Container, Title } from './styles'

function Cart (): JSX.Element {
  const { state, dispatch } = useContext(CartContext)

  async function createPreference (): Promise<string | undefined> {
    try {
      const payload: ICreatePreference = {
        items: state.cart.products.map(
          (item: ICartProduct) => ({
            title: item.title,
            quantity: item.quantity,
            unit_price: item.price
          })
        )
      }
      const response = await api2.post('/create/payament/preference', payload)
      return response.data.preferenceId
    } catch (error) {
      console.error(error)
    }
  }

  const { data: preferenceId, mutate } = useMutation({
    mutationFn: createPreference
  })

  useEffect(() => {
    initMercadoPago(process.env.MERCADO_PAGO_PUBLIC_KEY ?? '')
  }, [])

  useEffect(() => {
    if (state.cart.products.length > 0 && state.cart.open) {
      mutate()
    }
  }, [state.cart.open])

  function closeCart (): void {
    dispatch({
      type: Actions.CLOSE_CART
    })
  }

  return (
    <Container open={state.cart.open} data-testid="cart">
      <CloseButton onClick={closeCart}>
        <IoMdClose size={25} color='black' />
      </CloseButton>
      <Title>Produtos</Title>
      {state.cart.products.length <= 0
        ? <Empty />
        : <List data={state.cart.products} />}
      {state.cart.products.length > 0
        ? <Freight />
        : null}
      {state.cart.products.length > 0
        ? <Button>Finalizar compra</Button>
        : null}
      {state.cart.products.length > 0
        ? <Wallet initialization={{ preferenceId: preferenceId ?? '' }} />
        : null}
    </Container>
  )
}

export default Cart
