import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBrands = createAsyncThunk(
	"brand/fetchBrands",
	async (_, thunkAPI) => {
		try {
			return [ {
				id: 1,
				name: "Apple"
			} ]
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch brands");
		}
	}
)