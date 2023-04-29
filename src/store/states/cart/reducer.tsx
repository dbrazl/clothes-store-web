/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Action, Actions } from './@types/actions'
import { type State } from './@types'
import { type ICartProduct, type IProduct } from 'models/Shelf'

function cartReducer (state: State, action: Action): State {
  switch (action.type) {
    case Actions.OPEN_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          open: true
        }
      }

    case Actions.CLOSE_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          open: false
        }
      }

    case Actions.ADD_ITEM_TO_CART:
      return addProductToCart(state, action)

    case Actions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.filter(
            (item: ICartProduct) => item.id !== action.payload.id
          )
        }
      }

    case Actions.ADD_ONE_UNIT_FOR_AN_ITEM_IN_CART:
      return addOneUnitForAnItemInCart(state, action)

    case Actions.REMOVE_ONE_UNIT_FOR_AN_ITEM_IN_CART:
      return removeOneUnitForAnItemInCart(state, action)

    default:
      return state
  }
}

function addProductToCart (state: State, action: Action): State {
  const itemOnCart: boolean = !!state.cart.products.find(
    (item: IProduct) => item.id === action.payload.id
  )

  if (itemOnCart) {
    const products: ICartProduct[] = state.cart.products.map(
      (item: ICartProduct) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: +item.quantity + 1
          }
        }

        return item
      }
    )

    return {
      ...state,
      cart: {
        ...state.cart,
        products
      }
    }
  }

  return {
    ...state,
    cart: {
      ...state.cart,
      products: [
        ...state.cart.products,
        {
          ...action.payload,
          quantity: 1
        }
      ]
    }
  }
}

function addOneUnitForAnItemInCart (state: State, action: Action): State {
  const itemOnCart = state.cart.products.find(
    (item: ICartProduct) => item.id === action.payload.id
  )

  if (itemOnCart) {
    return {
      ...state,
      cart: {
        ...state.cart,
        products: state.cart.products.map(
          (item: ICartProduct) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: +item.quantity + 1
              }
            }

            return item
          }
        )
      }
    }
  }

  return state
}

function removeOneUnitForAnItemInCart (state: State, action: Action): State {
  const itemOnCart = state.cart.products.find(
    (item: ICartProduct) => item.id === action.payload.id
  )

  if (itemOnCart && itemOnCart.quantity > 1) {
    return {
      ...state,
      cart: {
        ...state.cart,
        products: state.cart.products.map(
          (item: ICartProduct) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: +item.quantity - 1
              }
            }

            return item
          }
        )
      }
    }
  }

  if (itemOnCart && itemOnCart.quantity <= 1) {
    return {
      ...state,
      cart: {
        ...state.cart,
        products: state.cart.products.filter(
          (item: ICartProduct) => item.id !== action.payload.id
        )
      }
    }
  }

  return state
}

export default cartReducer
