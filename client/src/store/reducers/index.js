import { brandReducer } from "./brandSlice";
import { deviceReducer } from "./deviceSlice";
import { userReducer } from "./userSlice";

export const rootReducer = {
	user: userReducer,
	device: deviceReducer,
	brand: brandReducer
}