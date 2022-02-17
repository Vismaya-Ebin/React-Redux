
import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
    //name of the state
    name:"count",
    //initial statw
    initialState:
    { 
        value:100,
       
    },
    //reducer functions should be pure functions it have 2 parameters which is state and action
    reducers:{
        //action 1
        increment:(state)=>{
            state.value = state.value + 1;

        },
        //action2
        decrement:(state)=>{
            state.value = state.value - 1;
        },
        resetValue:(state)=>{
            
            state.value = 0;
        },
      
    },
})

console.log("99999",countSlice)
//taking actions
export const {increment,decrement,resetValue,changeColor} = countSlice.actions;
//taking reducer
export default countSlice.reducer;