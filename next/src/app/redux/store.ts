import { configureStore } from '@reduxjs/toolkit'
import fetchData from "./slice"

export const makeStore = () => {
  return configureStore({
    reducer: fetchData,
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']