/* eslint-disable @typescript-eslint/no-explicit-any */
import { saveAuthetification, removeAuthetification } from 'services/sessionStorage'

import { Actions } from './@types/actions'
import { type State } from './@types'

function authReducer (state: any, action: any): State {
  const signed: State = {
    auth: {
      signed: true
    }
  }

  const unsigned: State = {
    auth: {
      signed: false
    }
  }

  switch (action.type) {
    case Actions.USER_IS_SIGNED:
      saveAuthetification(signed)
      return signed

    case Actions.USER_IS_UNSIGNED:
      removeAuthetification()
      return unsigned

    default:
      return state
  }
}

export default authReducer
