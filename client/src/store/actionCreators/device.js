import { createAsyncThunk } from "@reduxjs/toolkit";

const img = "https://images.hindustantimes.com/tech/htmobile4/P35289/images/Design/140596-v2-apple-iphone-12-256gb-mobile-phone-large-2.jpg"

export const fetchDevices = createAsyncThunk(
	"device/fetchDevices",
	async (_, thunkAPI) => {
		try {
			return [
				{ id: 1, name: "iphone12", price: "300", img, rating: 3.4 },
				{ id: 2, name: "freezer 2", price: "200", rating: 4 },
				{ id: 3, name: "tv 1", price: "400", img, rating: 2 },
				{ id: 4, name: "laptop 1", price: "220", img, rating: 5 },
				{ id: 5, name: "tablet v2", price: "250", img, rating: 4.3 },
				{ id: 6, name: "phone a", price: "130", img, rating: 3 },
				{ id: 7, name: "headphones", price: "205", img, rating: 1 },
			]
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch devices");
		}
	}
)