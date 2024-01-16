import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        cartItems: cartSlice
    }
})

export default store