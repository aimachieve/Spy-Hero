
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaBars, FaCalendar, FaCaretSquareUp, FaCheck, FaCheckCircle, FaCopy, FaEllipsisH, FaFacebookF, FaHeart, FaMicrophoneAlt, FaQuestion, FaQuestionCircle, FaRunning, FaStarOfDavid, FaThumbsUp } from 'react-icons/fa';
import { ButtonGroup, ButtonToolbar, Col, Container, Nav, NavLink, Row, Stack } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../../public/images/favico.png'

function Listing(props){
    return (
    <Card  style={{ width: '19rem', marginBottom:'2rem' }}>
            {/* <Card.Header style={{ justifyContent:'space-between' }}>
                      
                <Row>
                <Col lg md={6} style={{ fontSize:"10px" }}>
                    <FaCalendar /> September 23-27<br/>
                    <FaRunning />
                </Col>
                <Col style={{ display: "flex", justifyContent:"end" }}>
                    <FaQuestion />
                    <FaBars />
                </Col>
                </Row>
            </Card.Header>               */}
            <Card.Body>
                <p class="float-left"><FaCheckCircle  /> Active
                </p><br />
                <hr />
                <Stack direction="horizontal" gap={3}>
                <div>
                   <div> <FaCalendar /> September 23-27</div>
                   <div >
                    <FaRunning /> 5 days
                   </div>
                </div>
                <div  className="ms-auto">
                    <FaQuestionCircle />
                        
                    <vr/>
                    <FaEllipsisH />
                </div>
                </Stack>

<hr />
<Stack direction="horizontal" gap={3}>
      <div>
          <Image src={logo} width="15px" height="15px"/>
          Health Ways<FaCopy />
      </div>
     
    </Stack>
    <br />
    
                
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content. <FaCopy />
                </Card.Text>
                <Card.Img variant="top" src="https://images.freeimages.com/images/large-previews/d4f/www-1242368.jpg" />
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content. <Card.Link>Learn more</Card.Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer >
                <Container style={{ display:"flex",justifyContent:"space-between",fontSize:"8px", marginLeft:"-10px", width:"300px" }}>
                <Container>
                    <FaThumbsUp style={{marginRight:"10px"}}/>
                    <FaHeart style={{marginRight:"10px"}}/>
                    96
                </Container>
                <Container style={{display:"flex"}}>
                    <Nav.Item>30 Comments</Nav.Item>
                    <Nav.Item>15 Shares</Nav.Item>
                </Container>
                </Container>
                <ButtonToolbar aria-label="Toolbar with button groups">
                <Row>
                <Col md lg={4}>
                <ButtonGroup aria-label="first group">
                <Button size="sm" style={{ padding:"0px 15px"}} >
                        <FaMicrophoneAlt />
                        Ad Details
                    </Button>
                </ButtonGroup>
                </Col>
                <Col md lg={4}>
                <ButtonGroup aria-label="Second group">
                <Button size="sm" style={{ padding:"0px 10px"}} >
                        <FaMicrophoneAlt />
                        Ad Details
                    </Button>
                </ButtonGroup>
                </Col>
                <Col md lg={4}>
                <ButtonGroup aria-label="Third group">
                <Button size="sm" style={{ padding:"0px 10px"}}s>
                        <FaFacebookF />
                        Ad Library
                    </Button>
                </ButtonGroup>
                </Col>
                </Row>
                </ButtonToolbar>
                
            </Card.Footer>
            </Card>
        );
}

export default Listing;