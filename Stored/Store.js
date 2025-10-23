import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./Slicer"
export const store=configureStore(
    { 
        reducer:{
        cart:cartReducer,
    }
}
)

