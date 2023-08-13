import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTypes } from '../../store/actionCreators/type';
import { fetchBrands } from '../../store/actionCreators/brand';

const CreateDevice = ({ show, onHide }) => {
	const dispatch = useDispatch();
	const { types } = useSelector((state) => state.type);
	const { brands } = useSelector((state) => state.brand);
	const [ info, setInfo ] = useState([])

	useEffect(() => {
		if (!brands.length) {
			dispatch(fetchBrands());
		}

		if (!types.length) {
			dispatch(fetchTypes());
		}
	}, []);

	const addInfo = () => {
		setInfo([ ...info, {
			id: Date.now(),
			title: "",
			description: ""
		}]);
	};

	const removeInfo = (item) => {
		setInfo(info.filter(({ id }) => id !== item.id));
	};

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new device
				</Modal.Title>
			</Modal.Header>
		<Modal.Body>
			<Form>
				<Dropdown>
					<Dropdown.Toggle> Select type </Dropdown.Toggle>
					<Dropdown.Menu>
						{ types.map((type) => 
							<Dropdown.Item key={type.id}> {type.name} </Dropdown.Item> 
						)}
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className='mt-3'>
					<Dropdown.Toggle> Select brand </Dropdown.Toggle>
					<Dropdown.Menu>
						{ brands.map((brand) => 
							<Dropdown.Item key={brand.id}> {brand.name} </Dropdown.Item> 
						)}
					</Dropdown.Menu>
				</Dropdown>
				<Form.Control 
					className='mt-3'
					placeholder="Enter device name..."
				/>
				<Form.Control 
					type="number"
					min="0"
					step="5"
					className='mt-3'
					placeholder="Enter device price..."
				/>
				<Form.Control 
					type="file"
					className='mt-3'
					placeholder="Enter device name..."
				/>
				<hr/>
				<Button variant="outline-danger" onClick={addInfo}>
					Add new property
				</Button>

				{info.map((item) => 
					<Row key={item.id} className='mt-3'>
						<Col md="4">
							<Form.Control
								placeholder="Enter property title..."
							/>
						</Col>
						<Col md="4">
							<Form.Control
								placeholder="Enter property description..."
							/>
						</Col>
						<Col md="4">
						<Button variant="outline-danger" onClick={() => removeInfo(item)}>
							Delete
						</Button>
						</Col>
					</Row>
				)}
			</Form>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="outline-danger" onClick={onHide}>Close</Button>
			<Button variant="outline-success" onClick={onHide}>Add</Button>
		</Modal.Footer>
	  </Modal>
	);
};

export default CreateDevice;