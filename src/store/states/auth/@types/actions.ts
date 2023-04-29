export enum Actions {
  USER_IS_SIGNED = '@AUTH/USER_IS_SIGNED',
  USER_IS_UNSIGNED = '@AUTH/USER_IS_UNSIGNED'
}

export interface Action {
  type: string
  payload: any
}
