import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTypes = createAsyncThunk(
	"types/fetchTypes",
	async (_, thunkAPI) => {
		try {
			return [
				{ id: 1, name: "TV" },
				{ id: 2, name: "Laptops" },
				{ id: 3, name: "Tablets" },
				{ id: 4, name: "Freezers" },
			]
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch types");
		}
	}
)