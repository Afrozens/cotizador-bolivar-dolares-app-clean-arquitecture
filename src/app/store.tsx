import { Coin, Time } from '@/models'
import { configureStore } from '@reduxjs/toolkit'
import { todayReducer, timeReducer } from './slices'

export interface AppStore {
  today: Coin[]
  time: Time
}

export const store = configureStore<AppStore>({
  reducer: {
    today: todayReducer,
    time: timeReducer,
  },
})
