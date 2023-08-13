import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import star from "../assets/star.png";
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import imagePlaceholder from "../assets/image-placeholder.jpg";

const DeviceItem = ({ device }) => {
	const navigate = useNavigate();

	return (
		<Col md="3" className='mt-3' onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`) }>
			<Card style={{ cursor: "pointer" }} border="light" className='p-2'>
				<Image src={device.img || imagePlaceholder} style={{width: "100%"}}/>
				<div className="mt-1 d-flex justify-content-between align-items-center">
					<div className="text-black-50"> brand... </div>
					<div className="d-flex justify-content-between align-items-center">
						<div>{device.rating} </div>
						<Image style={{width: 16}} src={star}/>
					</div>
				</div>
				<div> {device.name} </div>
			</Card>
		</Col>
	);
};

export default DeviceItem;