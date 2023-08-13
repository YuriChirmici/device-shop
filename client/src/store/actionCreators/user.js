import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
	"user/fetchUser",
	async (_, thunkAPI) => {
		try {
			return {
				email: "test@aa.a",
				role: "USER"
			}
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch user");
		}
	}
)