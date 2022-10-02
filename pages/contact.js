import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import { FaEnvelopeSquare, FaFacebook, FaPhoneAlt } from 'react-icons/fa';



class Contact extends Component{
    
    render(){
        return(
            <Container style={{backgroundColor:"#ffffff", paddingTop:"20px", height:"700px"}} className="main">
                <Container>
                <div style={{ display:"flex", fontSize:"10px" }}>
                        <FaEnvelopeSquare />
                        <h6 style={{ textTransform:"uppercase" }}>Training & Tutorial Videos</h6>
                    </div>
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col>
                            <h4>Questions? Need Help?</h4>
                            <p>Reach out to us via chat or e-mail if you have any questions or need any help.</p>
                            <Container style={{ backgroundColor:"#EEEEEE", paddingTop:"20px",paddingBottom:"20px",color:"black" }}>
                                <h6>Our Contacts</h6>
                                <br />
                                <b>Subscription/Billing/Training Matters:</b>
                                <Button size="sm" style={{ backgroundColor:"#45B6AF" }}><FaPhoneAlt/> Send us a message via chat </Button> <br />
                                <underline>OR</underline> email us at: support@spyboss.com

                                <br /><br/>
                                <b>Software Technical Feedback/Issues:</b>
                                <p>ted@spybot.com</p>
                                <br /><br/>
                                <p>Support us and like TubeSift on Facebook:</p>
                                <FaFacebook />
                            </Container>
                        </Col>
                        <Col>
                        <h4>Meet The Founders</h4>
                            <p>Video Ad Vault by TubeSift is brought to you by:</p>
                            <Container style={{ paddingTop:"20px",paddingBottom:"20px",color:"black" }}>
                            <Card style={{ width: '30rem', display:"flex",flexDirection:"row" }}>
                                <Card.Img variant="left" style={{ width:"200px", height:"150px" }} src="https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                                <br />
                                <Card style={{ width: '30rem', display:"flex",flexDirection:"row" }}>
                                <Card.Img variant="left" style={{ width:"200px", height:"150px" }} src="https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Contact;