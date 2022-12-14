import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IProduct {
  brand: number;
  id: number;
  image: string;
  regular_price: {
    currency: string;
    value: number;
  };
  sku: string;
  title: string;
  type: string;
  filter?: boolean;
}
export interface IBusket {
  uuid: any;
  brand: number;
  id: number;
  image: string;
  price: {
    currency: string;
    value: number;
  };
  title: string;
  key: string;
}
interface State {
  busket: IBusket[];
  product: IProduct[];
  count: number;
  filter: any[];
}
const initialState: State = {
  busket: [],
  product: [],
  count: 0,
  filter: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, { payload }) => {
      state.product = payload;
      state.filter = payload;
    },
    addBusket: (state, { payload }) => {
      state.busket !== null && state.busket.push(payload);
    },
    remBusket: (state, { payload }) => {
      state.busket = state.busket.filter((prod) => prod.key !== payload);
    },

    cleanBusket: (state) => {
      state.busket = [];
    },
    changeFilter: (state, { payload }) => {
      state.product = state.product.map((prod) => {
        return prod.brand === payload
          ? { ...prod, filter: true }
          : prod;
      });
    },
    filter: (state) => {
      let a = state.product.filter((prod) => prod.filter === true);
      state.filter = a;
    },
    cleanFilter: (state) => {
      state.filter = state.product;
    },
  },
});

export const {
  getProduct,
  addBusket,
  cleanBusket,
  remBusket,
  changeFilter,
  filter,
  cleanFilter,
} = productSlice.actions;

export default productSlice.reducer;
