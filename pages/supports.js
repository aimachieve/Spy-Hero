import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaEnvelope } from 'react-icons/fa';


export default class Supports extends Component {
    render() {
        return (
        <Container style={{backgroundColor:"#ffffff", paddingTop:"20px", paddingLeft:"50px", paddingBottom:"50px", alignItems:"center"}} className="main">
            <h1>Supports</h1>
         <hr /> 
         <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Row>
            <Form.Group  className="mb-3" controlId="formGridState">
                <Form.Label>What do you need help with?</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="10"  />
                </Form.Group>

            <Button variant="primary"  style={{ width:"100%"}} type="submit">
                <FaEnvelope /> 
                Submit
            </Button>
            </Form>
            </Container>
        )
    }
}