import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Device from "./pages/Device";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Shop from "./pages/Shop";
import {
	ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE,LOGIN_ROUTE, REGISTRATION_ROUTE,
	SHOP_ROUTE
} from "./utils/consts";

export const allRoutes = {
	publicRoutes: [
		{ path: REGISTRATION_ROUTE, Component: Registration },
		{ path: LOGIN_ROUTE, Component: Login },
		{ path: SHOP_ROUTE, Component: Shop },
		{ path: DEVICE_ROUTE + "/:id", Component: Device },
	
	],
	userRoutes: [
		{ path: BASKET_ROUTE, Component: Basket }
	],
	adminRoutes: [
		{ path: ADMIN_ROUTE, Component: Admin }
	]
};

export const permissions = {
	userRoutes: [ "USER", "ADMIN" ],
	adminRoutes: [ "ADMIN" ],
}

export const getRoutesByRole = (role, isAuth = false) => {
	if (!isAuth) {
		return allRoutes.publicRoutes;
	}

	const routesNames = [];
	Object.entries(permissions).forEach(([ key, value ]) => {
		if (value.includes(role)) {
			routesNames.push(key);
		}
	});

	const routes = [];
	routesNames.forEach((key) => routes.push(...allRoutes[key]))

	return routes;
}