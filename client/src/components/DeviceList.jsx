import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from '../store/actionCreators/device';
import DeviceItem from './DeviceItem';
import Row from 'react-bootstrap/Row';

const DeviceList = () => {
	const { devices } = useSelector((state) => state.device);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDevices());
	}, []);

	return (
		<Row className='d-flex'>
			{devices.map((device) => 
				<DeviceItem key={device.id} device={device}/>
			)}
		</Row>
	);
};

export default DeviceList;