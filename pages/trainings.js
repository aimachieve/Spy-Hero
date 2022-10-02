import React, {Component} from 'react';
import { Button, Tab, Tabs, Nav, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { FaAward } from 'react-icons/fa';
import Search3 from '../components/forms/search3';
import Tutorial1 from '../components/forms/tutorial1';



class Trainings extends Component{
    constructor(props){
        super(props)
        this.state={
            navData:[
                {
                    title:"Ts BookMarker",
                    key:"first",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },
                {
                    title:"Ts BookMarker",
                    key:"second",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },
                {
                    title:"Ts BookMarker",
                    key:"third",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },
                {
                    title:"Ts BookMarker",
                    key:"forth",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },
                {
                    title:"Ts BookMarker",
                    key:"fifth",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },
                {
                    title:"Ts BookMarker",
                    key:"sixth",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },

                {
                    title:"Ts BookMarker",
                    key:"seventh",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },
                {
                    title:"Ts BookMarker",
                    key:"eight",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },
                {
                    title:"Ts BookMarker",
                    key:"ninth",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },
                {
                    title:"Ts BookMarker",
                    key:"tenth",
                    comp:<Tutorial1  title="Ts Bookmarker"/>
                },

            ]
        }
    }

    render(){
        return(
            <Container style={{backgroundColor:"#ffffff", paddingTop:"20px"}} className="main">
                <Container style={{display:"flex", justifyContent:"space-between" }}>
                    <div style={{ display:"Flex" }}>
                        <FaAward />
                        <h4 style={{ textTransform:"uppercase" }}>Training & Tutorial Videos</h4>
                    </div>
                    <div>
                        <Button style={{ padding:"1px 10px",outlineColor:"grey", fontSize:"10px" }} variant="outline-secondary">
                            Quick Product Tour
                        </Button>
                    </div>
                </Container>
                <hr />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                   
                    <Nav variant="pills" className="flex-row">
                       {
                           this.state.navData.map((item,index) => (
                                    
                                    <Nav.Item key={index}>
                        <Nav.Link eventKey={item.key}>{item.title}</Nav.Link>
                        </Nav.Item>
                                    
                           ))
                       }
                    </Nav>
                 
                    
                    <hr/>
                

                    <Tab.Content>
                    {
                        this.state.navData.map((item,index) => (
                            <Tab.Pane eventKey={item.key} key={index}>
                        {item.comp}
                        </Tab.Pane>
                    ))
                    }
                    </Tab.Content>
                 
               
                </Tab.Container>
        </Container>
        );
    }
}

export default Trainings;