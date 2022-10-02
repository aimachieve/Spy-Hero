import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './types'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})