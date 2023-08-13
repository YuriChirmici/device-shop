import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import star from "../assets/star.png";
import imagePlaceholder from "../assets/image-placeholder.jpg";

const Device = () => {
	const deviceId = useParams().id;
	const { devices } = useSelector((state) => state.device)
	const device = devices.find(({ id }) => id.toString() === deviceId);

	const description = [
		{ id: 1, title: "RAM", description: "5 GB" },
		{ id: 2, title: "CPU", description: "Intel" },
		{ id: 3, title: "Frequency", description: "2.2GHZ" },
	]

	return (
		<Container className='mt-3'>
			<Row className=' d-flex'>
				<Col md="4">
					<Image src={device.img || imagePlaceholder} style={{width: "100%"}}/>
				</Col>
				<Col md="4">
					<Row>
						<h2> {device.name} </h2>
						<div>
							<div className="d-flex align-items-center">
								<div>{device.rating} </div>
								<Image style={{width: 16}} src={star}/>
							</div>
						</div>
					</Row>
				</Col>
				<Col md="4">
					<Card
						className="d-flex align-items-center justify-content-around"
						style={{ height: 300, fontSize: 32, border: "5px solid lightgray"}}
					>
						<h3> ${device.price} </h3>
						<Button variant="outline-dark"> Add to Basket </Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column m-3'>
				<h2> Characteristics: </h2>
				{ description.map((item, index) => 
					<Row
						key={item.id}
						style={{ background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10 }}
					>
						{item.title}: {item.description}
					</Row>
				)}
			</Row>
		</Container>
	);
};

export default Device;