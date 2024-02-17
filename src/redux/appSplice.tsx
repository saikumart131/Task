import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  brands: any;
  selectedBrand: any;
  createdList: any;
}

const initialState: AppState = {
  brands: null,
  selectedBrand: null,
  createdList: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setBrands:(state, action: PayloadAction<any>)=>{
        state.brands = action.payload
    },
    setSelectedBrand:(state, action: PayloadAction<any>)=>{
        state.selectedBrand = action.payload
    },
    addToList:(state, action: PayloadAction<any>)=>{
      state.createdList = action.payload;
      state.selectedBrand = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setBrands, setSelectedBrand , addToList} = appSlice.actions;

export default appSlice.reducer;
