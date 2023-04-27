import type { FC } from 'react'

export interface Control {
  signed: boolean
}

export interface Route {
  key: string
  path: string
  element: FC
}
