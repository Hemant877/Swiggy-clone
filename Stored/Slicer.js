import { createSlice } from "@reduxjs/toolkit";

const Slicer = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
        const element =  state.items.find(item=> item.id===action.payload.id); 
            if(element)
            {
                element.quantity+=1;
            }else{
                state.items.push({ ...action.payload, quantity: 1 });
            }
      state.count++;
    },
    removeItem: (state, action) => {
         const element =  state.items.find(item=> item.id===action.payload.id); 
            if(element)
            {
                element.quantity-=1;
            }else{
                state.items = state.items.filter(item => item.id !== action.payload);
            }
      state.count--;
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },
  },
});

// ✅ correct export
export const { addItem, removeItem, clearCart } = Slicer.actions;
export default Slicer.reducer;
