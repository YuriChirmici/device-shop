import { Routes, Route } from 'react-router-dom';
import { getRoutesByRole } from '../routes';
import Shop from '../pages/Shop';
import ErrorPage from '../pages/Error';

const AppRouter = () => {
	const role = "ADMIN";
	const routes = getRoutesByRole(role);

	return (
		<div>
			<Routes>
				<Route path="/" Component={Shop} />
				{ routes.map(({ path, Component }) =>
					<Route key={path} path={path} Component={Component} exact />
				)}
				<Route path="*" Component={ErrorPage} />
			</Routes>
		</div>
	);
};

export default AppRouter;