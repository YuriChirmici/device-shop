import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Registration = () => {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Card style={{ width: 600 }} className="p-5 mt-3">
				<h2 className='m-auto'> Registration </h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Enter you email..."
					/>
					<Form.Control
						className="mt-3"
						placeholder="Enter you password..."
					/>
					<div className='d-flex justify-content-between align-items-center mt-3'>
						<div>
							<span> Already have an account? </span>
							<NavLink to={LOGIN_ROUTE}> Login </NavLink>
						</div>
						<Button variant='outline-success'>
							Sign Up
						</Button>
					</div>
					
				</Form>
			</Card>
		</Container>
	);
};

export default Registration;