import { Routes, Route } from 'react-router-dom';
import { getRoutesByRole } from '../routes';
import Shop from '../pages/Shop';
import { useSelector } from 'react-redux';

const AppRouter = () => {
	const { user, isAuth } = useSelector((state) => state.user)
	const routes = getRoutesByRole(user.role, isAuth);

	return (
		<div>
			<Routes>
				<Route path="/" Component={Shop} />
				{ routes.map(({ path, Component }) =>
					<Route key={path} path={path} Component={Component} exact />
				)}
				<Route path="*" Component={Shop} />
			</Routes>
		</div>
	);
};

export default AppRouter;