import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  network:"facebook",
  isOpen:"true",
  networks:[
    {id:0, network:"facebook"},
    {id:1, network:"tiktok"},
    {id:2, network:"youtube"},
    {id:3, network:"native"},
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectNetwork:(state,action) =>{
      console.log(action.payload['network']);
      state.network = action.payload['network'];

    },
    updateOpen:(state,action) =>{
      console.log(action.payload['open']);
      state.open = action.payload['open'];

    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, selectNetwork, updateOpen } = counterSlice.actions

export default counterSlice.reducer