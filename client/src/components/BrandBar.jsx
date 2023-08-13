import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import { fetchBrands } from "../store/actionCreators/brand";
import { brandSlice } from "../store/reducers/brandSlice";

const BrandBar = () => {
	const { selectBrand } = brandSlice.actions;
	const dispatch = useDispatch();
	const { brands, selectedBrand } = useSelector((state) => state.brand);

	useEffect(() => {
		dispatch(fetchBrands());
	}, []);

	return (
		<div className="d-flex flex-wrap">
			{ brands.map((brand) => 
				<Card
					key={brand.id}
					className="p-2"
					style={{cursor: "pointer"}}
					border={selectedBrand.id === brand.id ? "dark" : "light"}
					onClick={() => dispatch(selectBrand(brand))}
				>
					{brand.name}
				</Card>
			)}
		</div>
	);
};

export default BrandBar;