import { timeEmptyState } from '@/models'
import { createSlice } from '@reduxjs/toolkit'

export const timeSlice = createSlice({
  name: 'time',
  initialState: timeEmptyState,
  reducers: {
    getTime: (state, { payload }) => {
      return payload
    },
  },
})


export const { getTime } = timeSlice.actions

export default timeSlice.reducer