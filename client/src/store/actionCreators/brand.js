import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBrands = createAsyncThunk(
	"brand/fetchBrands",
	async (_, thunkAPI) => {
		try {
			return [
				{ id: 1, name: "Apple"},
				{ id: 2, name: "Samsung"},
				{ id: 3, name: "Huawei"},
				{ id: 4, name: "Xiaomi"},
			]
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch brands");
		}
	}
)