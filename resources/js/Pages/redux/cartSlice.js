import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const items = JSON.parse(localStorage.getItem("cartItems"));
const initialState = {
  cartItems: items ? items : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existItem >= 0) {
        
        toast.info("Item already in cart");
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload?.title} added`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      toast.success(`${action.payload.title} removed`);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    qtyIncreament:(state,action)=>{
      const itemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id);
      console.log('+item',itemIndex);
       if (action.payload.stock >= action.payload.quantity) {
         state.cartItems[itemIndex].quantity += 1;
         toast.success(`${state.cartItems[itemIndex].title} quantity updated`);
         localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
       } else {
         toast.info("stock out");
       }
    },
    qtyDecreament:(state,action)=>{
       const itemIndex = state.cartItems.findIndex(
         (item) => item.id === action.payload.id
       );
       console.log(itemIndex);
       if (state.cartItems[itemIndex].quantity > 1) {
         state.cartItems[itemIndex].quantity -= 1;
         toast.success(`${state.cartItems[itemIndex].title} quantity updated`);
       } else {
         return state;
       }
       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  },
});

export const { addToCart, removeCart, qtyIncreament, qtyDecreament } =
  cartSlice.actions;
export default cartSlice.reducer;
