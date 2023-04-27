import { STORAGE_KEY } from 'configs/storage'
import { type State } from 'store/states/auth/@types'

export function saveAuthetification (storage: Storage, state: any): void {
  storage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function getAuthetification (storage: Storage): State | null {
  const data: string | null = storage.getItem(STORAGE_KEY)
  return data !== null ? JSON.parse(data) : null
}

export function removeAuthetification (storage: Storage): void {
  storage.removeItem(STORAGE_KEY)
}
