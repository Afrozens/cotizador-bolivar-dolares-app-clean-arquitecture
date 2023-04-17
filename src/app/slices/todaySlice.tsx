import { coinsEmptyState } from "@/models"
import { createSlice } from "@reduxjs/toolkit"

export const todaySlice = createSlice({
  name: 'today',
  initialState: coinsEmptyState,
  reducers: {
    readPrices: (state, {payload}) => {
      return payload
    },
  },
})

export const {readPrices} = todaySlice.actions

export default todaySlice.reducer