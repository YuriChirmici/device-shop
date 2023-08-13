import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../actionCreators/user";

const initialState = {
	user: {},
	isAuth: false,
	isLoading: false,
	error: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.isAuth = true;
			state.isLoading = false;
			state.error = "";
		});

		builder.addCase(fetchUser.pending, (state) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(fetchUser.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
	}
})

export const userReducer = userSlice.reducer;
