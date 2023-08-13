import cls from "./Navbar.module.css";
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";

const NavBar = () => {
	const { user, isAuth } = useSelector((state) => state.user);
	const isAdmin = user.role === "ADMIN";

	let navButtons = [
		{ text: "Login", path: LOGIN_ROUTE },
		{ text: "Sign Up", path: REGISTRATION_ROUTE },
	];

	if (isAuth) {
		navButtons = [
			isAdmin && { text: "Admin", path: ADMIN_ROUTE },
			{ text: "Log out", path: LOGIN_ROUTE },
		];
	}

	const buttons = navButtons.filter((button) => button)
		.map(({ text, path, props }) =>
			<Button variant="outline-light" key={path} { ...(props || {})}>
				<NavLink to={path}> {text} </NavLink>
			</Button>
		);

	return (
		<Navbar className={cls.navbar} bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink className={cls.logo} to="/">DeviceShop</NavLink>
				<Nav className={"ml-auto " + cls.nav}>
					{ buttons }
				</Nav>
			</Container>
	  	</Navbar>
	);
};

export default NavBar;