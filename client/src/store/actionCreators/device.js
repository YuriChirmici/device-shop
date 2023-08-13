import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDevices = createAsyncThunk(
	"device/fetchDevices",
	async (_, thunkAPI) => {
		try {
			return [{
				id: 1,
				name: "iphone12",
				price: "300",
				img: "https://technome.bg/image/cache/catalog/pc-import/0006301637053/0006302249630/00063036217711-446x446.jpg"
			}]
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch devices");
		}
	}
)