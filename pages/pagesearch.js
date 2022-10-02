import {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOpts,
    TableBody,
    TableHeader
  } from 'react-bs-datatable';
import { Tabs, Tab, ButtonToolbar } from 'react-bootstrap';
import Search1 from '../components/forms/search1';
import Search2 from '../components/forms/search2';
import Search3 from '../components/forms/search3';
import PopsOver from '../components/tooltips/popsover';







let details1  = `Troubleshooting: Not getting much results for a particular search term
<br />
Suggestions:  <br/>

Use a broader search term or the main topic keyword.
Keep the search term short and concise (remove unnecessary words like "how to").
Check for typos in your search term (VAV search engine is sensitive to typos).
Make sure exclude filters (especially "views" and "duration" filters) are not set too aggressively.
Try using synonymous or other closely related keywords instead.
Enter words separately ("back pain" instead of "backpain") unless searching for specific domain names. `;
export default class Search extends Component {
    constructor(props){
      super(props);
      this.state={
        heades:[
          { title: 'Username', prop: 'username' ,
          isSortable: true },
          { title: 'Name', prop: 'realname', 
          isSortable: true },
          { title: 'Location', prop: 'location',
          isSortable: true },
        
            {
             
              isSortable: true,
              prop: 'date',
              title: 'Last Update'
            },
            {
             
              isSortable: true,
              prop: 'score',
              title: 'Score'
            }
        ],
        body:[]
      }
    }


    loadData(){
     let data = Array.from(new Array(10), () => {
        const rd = (Math.random() * 10).toFixed(1);
      
        if (rd > 0.5) {
          return {
            username: 'i-am-billy',
            realname: `Billy ${rd}`,
            location: 'Mars',
            date:"10-10-2020",
            score:rd
          };
        }
      
        return {
          username: 'john-nhoj',
          realname: `John ${rd}`,
          location: 'Saturn',
          date:"10-10-2020",
            score:rd
        };
      });
      this.setState({body:data});
    }

    componentDidMount(){
      this.loadData();
    }

    render(){
        return (
            <>
            <Container style={{backgroundColor:"#ffffff", paddingTop:"20px"}} className="main">
            <div style={{ display:"flex", justifyContent:"space-between" }}>
                <h4>Page Search</h4>
                <div style={{ display:"flex" }}>
                   <PopsOver title="Search Tips" body={details1}/>
                   
                   <Button style={{ padding:"1px 10px",outlineColor:"grey", fontSize:"10px" }} variant="outline-secondary"> reset and clear results </Button>
                </div>
            </div>
            <hr />
                <Container>

                <Tabs
                    defaultActiveKey="ads"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="ads" title="Browse Ads">
                      <Search1 />
                    </Tab>
                    <Tab eventKey="profile" title="Search 2">
                      <Search2 />
                    </Tab>
                    <Tab eventKey="contact" title="Search 3">
                      <Search3 />
                    </Tab>
                  </Tabs>
                {/* <Form style={{ paddingBottom:"20px" }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Enter search text .." />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Website Url</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                   

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                    </Form> */}
                </Container>
            </Container>
            <br/>
            <Container style={{backgroundColor:"#ffffff", paddingTop:"20px"}} className="main">
                <Container>
                <DatatableWrapper body={this.state.body} headers={this.state.heades}>
      <Row className="mb-4">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
          {/* <PaginationOpts /> */}
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          {/* <Pagination /> */}
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
                </Container>
            </Container>
            </>
        );
    }
}