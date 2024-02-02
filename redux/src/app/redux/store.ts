import users from './slice'
import todoReducer from './todoslice'
import { configureStore } from '@reduxjs/toolkit'

export const store = () => {
  return configureStore({
    reducer:{
      usersData:users,
      todo:todoReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']