import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./store/actionCreators/user";
import Spinner from "react-bootstrap/Spinner";

function App() {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(checkUser());
	}, []);

	if (isLoading) {
		return <Spinner animation="grow" />
	}

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<AppRouter />
			</div>
		</BrowserRouter>
	);
}

export default App;
