import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../model/carts";

export type cartSliceState = {
  items: CartItem[];
  total: number;
};

const initialState: cartSliceState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, { payload }: PayloadAction<CartItem>) {
      const index = state.items.findIndex(
        (item) => item.productId === payload.productId
      );

      state.total += payload.total;

      if (index === -1) {
        state.items.push(payload);
        return;
      }

      const { productId } = payload;
      const item = state.items[index];
      state.items[index] = {
        productId,
        quantity: item.quantity + payload.quantity,
        total: item.total + payload.total,
      };
    },
  },
  selectors: {
    selectCartTotal: (state) => state.total,
  },
});

export const { selectCartTotal } = cartSlice.selectors;
export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
