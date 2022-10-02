import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FaAd, FaCross, FaFacebook, FaFacebookMessenger, FaSalesforce, FaSoundcloud, FaStoreAltSlash, FaTeamspeak, FaTiktok } from 'react-icons/fa';
import { Col, Form, Row, Stack } from 'react-bootstrap';

function CardData(props) {

    return ( <Card style={{ width: '18rem',paddingLeft:"1em", backgroundColor:`${props.color}` }}>
    <Card.Body>
    <Stack direction="horizontal" gap={3}>
        <div> {props.icon}
        </div>
        <div className="ms-auto">
     
            <Form.Check 
                style={{ marginTop:"-1em" }}
                type="switch"
                id="custom-switch"
            />
           
        </div>
    </Stack>

        <Container fluid style={{ marginTop:"1em", marginLeft:"-1em" }}>
      <Row>
        <Col>
        <Card.Title>Active Ads</Card.Title>
            <Card.Title style={{ fontSize:"2em" }}>{props.total_no}</Card.Title>
            <br />
            <Button variant="dark" size="md">Submit</Button>
        </Col>
        <Col>{props.largeIcon}</Col>
      </Row>
      </Container>
    </Card.Body>
  </Card>
    )
    // return (<>
    //     <Card className="chart_class" style={{ backgroundColor:props.color, paddingLeft:"0 !important",paddingRight:"1pt" }}>
    //                     <Card.Body style={{ paddingLeft:"0 !important" }} >
                        
    //                             <Container style={{ display:"flex", paddingLeft:"0",  }}>
    //                                 <Container style={{ marginLeft:"-10px !important" }}>
    //                                     <Container  style={{ fontSize:"1.7em" }}>
    //                                         { props.total_no }
    //                                     </Container>
    //                                     <Container style={{ fontSize:"1.2em", height:"3em" }}>
    //                                        { props.title }
    //                                     </Container>
    //                                     <Container  >
    //                                         <Button  variant="dark" style={{ width:"100%", fontSize:"0.50em", marginLeft:"0" }}>
    //                                            <FaCross />
    //                                             View All
    //                                         </Button>
    //                                     </Container>
    //                                 </Container>
    //                                 {/* <Container> */}
    //                                     <Container  style={{ marginLeft:"-1em" }}>
    //                                         {props.icon}
    //                                     </Container>
    //                                 {/* </Container> */}
    //                             </Container>
                          
    //                     </Card.Body>
    //                     </Card>
    // </>)

}

export default CardData;