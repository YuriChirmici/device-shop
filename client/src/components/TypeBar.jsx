import { useDispatch, useSelector } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect } from "react";
import { fetchTypes } from "../store/actionCreators/type";
import { typeSlice } from "../store/reducers/typeSlice";

const TypeBar = () => {
	const { selectType } = typeSlice.actions;
	const dispatch = useDispatch();
	const { types, selectedType } = useSelector((state) => state.type);

	useEffect(() => {
		dispatch(fetchTypes());
	}, []);

	return (
		<ListGroup>
			{ types.map((type) => 
				<ListGroup.Item
					variant="light"
					active={selectedType.id === type.id}
					style={{cursor: "pointer"}}
					key={type.id}
					onClick={() => dispatch(selectType(type))}
				>
					{type.name}
				</ListGroup.Item>
			)}
		</ListGroup>
	);
};

export default TypeBar;