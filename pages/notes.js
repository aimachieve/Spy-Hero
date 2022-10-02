import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export default class Notes extends Component {
    render() {
        return (
            <Container style={{backgroundColor:"#ffffff", paddingTop:"20px", paddingLeft:"50px", alignItems:"center"}} className="main">
            <h1>Notes</h1>
         <hr /> 
             <Row style={{ alignItems:"center" }}>
                 <Col md lg={4}>
                 <Card style={{ width: '18rem', marginBottom:'2rem' }}>
                         
                         <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                             <Card.Text>
                             Some quick example text to build on the card title and make up the
                             bulk of the cards content.
                             </Card.Text>
                             <Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg" />
                             
                         </Card.Body>
                         <Card.Header>
                         <Button variant="primary">Go somewhere</Button>
                         </Card.Header>
                         </Card>
                 </Col>
                 <Col md lg={4}>
                 <Card style={{ width: '18rem', marginBottom:'2rem' }}>
                         
                         <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                             <Card.Text>
                             Some quick example text to build on the card title and make up the
                             bulk of the cards content.
                             </Card.Text>
                             <Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg" />
                             
                         </Card.Body>
                         <Card.Header>
                         <Button variant="primary">Go somewhere</Button>
                         </Card.Header>
                         </Card>
                 </Col>
                 <Col md lg={4}>
                 <Card style={{ width: '18rem', marginBottom:'2rem' }}>
                         
                         <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                             <Card.Text>
                             Some quick example text to build on the card title and make up the
                             bulk of the cards content.
                             </Card.Text>
                             <Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg" />
                             
                         </Card.Body>
                         <Card.Header>
                         <Button variant="primary">Go somewhere</Button>
                         </Card.Header>
                         </Card>
                 </Col>
                 <Col md lg={4}>
                 <Card style={{ width: '18rem', marginBottom:'2rem' }}>
                         
                         <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                             <Card.Text>
                             Some quick example text to build on the card title and make up the
                             bulk of the cards content.
                             </Card.Text>
                             <Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg" />
                             
                         </Card.Body>
                         <Card.Header>
                         <Button variant="primary">Go somewhere</Button>
                         </Card.Header>
                         </Card>
                 </Col>
                 <Col md lg={4}>
                 <Card style={{ width: '18rem', marginBottom:'2rem' }}>
                         
                         <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                             <Card.Text>
                             Some quick example text to build on the card title and make up the
                             bulk of the cards content.
                             </Card.Text>
                             <Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg" />
                             
                         </Card.Body>
                         <Card.Header>
                         <Button variant="primary">Go somewhere</Button>
                         </Card.Header>
                         </Card>
                 </Col>
                 <Col md lg={4}>
                 <Card style={{ width: '18rem', marginBottom:'2rem' }}>
                         
                         <Card.Body>
                             <Card.Title>Card Title</Card.Title>
                             <Card.Text>
                             Some quick example text to build on the card title and make up the
                             bulk of the cards content.
                             </Card.Text>
                             <Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg" />
                             
                         </Card.Body>
                         <Card.Header>
                         <Button variant="primary">Go somewhere</Button>
                         </Card.Header>
                         </Card>
                 </Col>
             </Row>
         </Container>
        )
    }
}