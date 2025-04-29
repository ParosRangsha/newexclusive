import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "counter",
  initialState: {
    cartItem: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item)=>{item.id == action.payload.id})
      if(findProduct !== -1){
        state.cartItem[findProduct].qty += 1
      }else{
        state.cartItem = [...state.cartItem, action.payload]
        localStorage.setItem('cart', JSON.stringify(state.cartItem))
        
      }
      
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
