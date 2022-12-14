import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { productSlice } from './slices/productSlice'
// ...
const store = configureStore({
  reducer: {
    prod: productSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;