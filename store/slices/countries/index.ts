import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { IGif } from "../../../types/gif";

type CountriesState = {
  searchWord: string;
  filter: string;
};

const initialState: CountriesState = {
  searchWord: "",
  filter: "",
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setSearchWord,
  setFilter,
} = countriesSlice.actions;

export default countriesSlice.reducer;
