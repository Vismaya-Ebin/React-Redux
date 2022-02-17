/*Store creation in redux*/ 
import {configureStore}from "@reduxjs/toolkit";
import countReducer from './count/countSlice';
import colorReducer from'./color/colorSlice';


//it will take the root reducer which is an object property
//each state is a slice
//each state have a reducer function which finally be added in root reducer
export default configureStore({
    reducer:{
        count:countReducer,
        color:colorReducer
    }
   
})