import { type State } from 'store/states/auth/@types'
import { getAuthetification as getAuth, removeAuthetification as rmvAuth, saveAuthetification as saveAuth } from './authetification'

const STORAGE: Storage = window.sessionStorage

function saveAuthetification (state: State): void {
  saveAuth(STORAGE, state)
}

function getAuthetification (): State | null {
  return getAuth(STORAGE)
}

function removeAuthetification (): void {
  rmvAuth(STORAGE)
}

export {
  saveAuthetification,
  getAuthetification,
  removeAuthetification
}
