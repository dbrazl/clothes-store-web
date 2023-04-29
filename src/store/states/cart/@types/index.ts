import { type ICartProduct } from 'models/Shelf'

export interface State {
  cart: {
    open: boolean
    products: ICartProduct[]
  }
}

export interface CartProviderType {
  children: JSX.Element | JSX.Element[]
}

export interface Provider {
  state: State
  dispatch: React.Dispatch<any>
}
