export interface State {
  auth: {
    signed: boolean
  }
}

export interface AuthProviderType {
  children: JSX.Element | JSX.Element[]
}

export interface Provider {
  state: State
  dispatch: React.Dispatch<any>
}
