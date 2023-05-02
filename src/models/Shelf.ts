export interface IRating {
  rate: number
  count: number
}

export interface IProduct {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: IRating
  title: string
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export interface IPayamentProduct {
  title: string
  quantity: number
  unit_price: number
}

export interface ICreatePreference {
  items: IPayamentProduct[]
}
