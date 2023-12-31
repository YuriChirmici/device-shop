import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "../actionCreators/brand";

const initialState = {
	brands: [],
	isLoading: false,
	error: "",
	selectedBrand: {}
};

export const brandSlice = createSlice({
	name: "brand",
	initialState,
	reducers: {
		selectBrand(state, action) {
			state.selectedBrand = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBrands.fulfilled, (state, action) => {
			state.brands = action.payload;
			state.isLoading = false;
			state.error = "";
		});

		builder.addCase(fetchBrands.pending, (state, action) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(fetchBrands.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
});

export const brandReducer = brandSlice.reducer;