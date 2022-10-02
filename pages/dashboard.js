import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { FaAd, FaBookReader, FaCross, FaDollarSign, FaFacebook, FaFolder, FaSalesforce, FaSearch, FaServer, FaSoundcloud, FaStoreAltSlash, FaTeamspeak, FaTh, FaTiktok, FaYoutube } from 'react-icons/fa';
import CardData from '../components/tooltips/card_d';
import Form from 'react-bootstrap/Form';
import { InputGroup, Dropdown,DropdownButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import {selectNetwork} from '../store/types';
import { connect } from "react-redux"; 
import Listing from '../components/mini/listing';

const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Hours Studied in Geeksforgeeks",
          data: [2, 5, 6, 7, 3],
          backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
        }
      ]
  }

 class Dashboard extends Component {
    constructor(props){
        super(props);
      
    }
    render(){
        return (
            <Container className="mt-4" style={{ backgroundColor:"#ffffff"}}>
                <Container  className="pt-4" style={{ fontSize:"13px", marginLeft:"2vw" }}>
                    <Form>
                    <Row className="align-items-center">
                        <Col xs="auto" >
                        <Form.Text id="passwordHelpBlock" style={{ marginTop:"-20px" }}>
                            Search in
                        </Form.Text>
                        </Col>
                        <Col xs="auto">
                        <div key={`inline-radio`} className="mb-3" style={{ marginTop:"5px" }}>
                            <Form.Check
                                inline
                                label="Facebook"
                                name="group1"
                                value="facebook"
                                type="radio"
                                onChange={()=>this.props.selectNetwork({network:"facebook"})}
                                id={`inline-radio-1`}
                            />
                            <Form.Check
                                inline
                                label="Tiktok"
                                name="group1"
                                value="tiktok"
                                type="radio"
                                onChange={()=>this.props.selectNetwork({network:"tiktok"})}
                                id={`inline-radio-2`}
                            />
                            <Form.Check
                                inline
                                label="Youtube"
                                type="radio"
                                value="youtube"
                                name="group1"
                                onChange={()=>this.props.selectNetwork({network:"youtube"})}
                                id={`inline-radio-3`}
                            />
                            <Form.Check
                                inline
                                label="Native"
                                name="group1"
                                type="radio"
                                value="native"
                                onChange={()=>this.props.selectNetwork({network:"native"})}
                                id={`inline-radio-4`}
                            />
                            </div>
                        </Col>
                        <Col xs="auto">
                        <Form.Select aria-label="Default select example" style={{ marginTop:"-18px", fontSize:"12px" }}>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        </Col>
                        <Col xs="auto">
                        {/* <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Search .....
                        </Form.Label> */}
                        <InputGroup className="mb-2" style={{ marginTop:"-10px", fontSize:"13px" }}>
                        
                            <Form.Control id="inlineFormInputGroup" placeholder="Enter Search term....." style={{ fontSize:"13px" }} />
                            <InputGroup.Text style={{ fontSize:"13px" }}>
                            <FaSearch />
                            Search</InputGroup.Text>
                        </InputGroup>
                        </Col>
                    </Row>
                    </Form>
                </Container>
                <hr />
                <Container style={{ marginLeft:"0.5vw" }}>
                    <Row>
                        <Col md lg={4}>
                        <CardData 
                                total_no="192725" 
                                title="Facebook"
                                links=""
                                color="blue"
                                largeIcon={<FaFacebook style={{ color:"#ffffff" }} size="sm" />}
                                icon={ <FaFacebook style={{ marginTop:"-1em" }} />}
                                />
                        </Col>
                        <Col md lg={4}>
                        <CardData 
                                total_no="192725" 
                                title="Youtube"
                                links=""
                                color="red"
                                largeIcon={<FaYoutube style={{ color:"#ffffff" }} size="sm" />}
                                icon={ <FaYoutube style={{ marginTop:"-1em" }} />}
                                />
                        </Col>
                        <Col md lg={4}>
                        <CardData 
                                total_no="192725" 
                                title="Facebook"
                                links=""
                                color="#000000"
                                largeIcon={<FaTiktok style={{ color:"#ffffff" }} size="sm" />}
                                icon={ <FaTiktok style={{ marginTop:"-1em" }} />}
                                />
                        </Col>
                        
                    </Row>
                    <br/><br/>
                    <Row>
                        <Col md lg={6}>
                        <Card>
                            <Card.Body>
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr><tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr><tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr><tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                    </tbody>
                                    </Table>
                            </Card.Body>
                            </Card>    
                        </Col>
                        <Col md lg={6}>
                        <Card>
                            <Card.Body>
                                <MDBContainer>
        <Pie data={data} />
        </MDBContainer>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br /><br/><br/>
                    <Row>
                    {
                        [1,2,3,4,5,6,7,8,9].map((item,index)=>(
                            <Col md lg={4} key={index}>
                            <Listing />
                            </Col>
                        ))

                    }
                    </Row>
                    </Container>
          </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    network: state.counter.network
  });
const mapDispatchToProps = { selectNetwork };
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);