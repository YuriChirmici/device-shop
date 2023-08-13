import { createSlice } from "@reduxjs/toolkit"
import { fetchDevices } from "../actionCreators/device";

const initialState = {
	devices: [],
	isLoading: false,
	error: ""
}

const deviceSlice = createSlice({
	name: "device",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchDevices.fulfilled, (state, action) => {
			state.devices = action.payload;
			state.isLoading = false;
			state.error = "";
		});

		builder.addCase(fetchDevices.pending, (state) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(fetchDevices.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
})

export const deviceReducer = deviceSlice.reducer;