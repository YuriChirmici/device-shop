import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateType = ({ show, onHide }) => {
	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new type
				</Modal.Title>
			</Modal.Header>
		<Modal.Body>
			<Form>
				<Form.Control 
					placeholder="Enter type name..."
				/>
			</Form>
		</Modal.Body>
		<Modal.Footer>
			<Button variant="outline-danger" onClick={onHide}>Close</Button>
			<Button variant="outline-success" onClick={onHide}>Add</Button>
		</Modal.Footer>
	  </Modal>
	);
};

export default CreateType;