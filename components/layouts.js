import React,{useState} from 'react';
import Header from './navbar'
import Sidebar from './sidebar'
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Footer from './footer'
import {selectNetwork, updateOpen} from '../store/types';
import { connect } from "react-redux"; 
import { useSelector, useDispatch } from 'react-redux'

export default function Layout({ children }) {
    const[isOpen, setIsopen]  = useState(true);
    const dispatch = useDispatch();
    let toggle=()=>{ 
        dispatch(updateOpen({open:!isOpen}))
        setIsopen(!isOpen);}
    let bgNetwork = useSelector((state)=>state.counter.network)
    let classBg ="bg-meta";
    if(bgNetwork =="facebook"){
        classBg = "bg-meta"
    }else if(bgNetwork=="tiktok"){
        classBg = "bg-tiktok"
    }else if(bgNetwork=="youtube"){
        classBg = "bg-youtube"
    }
    else if(bgNetwork=="native"){
        classBg = "#ffffff"
    }
  return (
      <>
    <Header onClick = {() => toggle()}/>
    <Container fluid className="mt-3" style={{ backgroundColor:"#E9ECF3", height:"100vh" }}>
      <Row>
      <Col md lg={3}><Sidebar isOpen={isOpen}/></Col>
      <Col md={9} lg={9} >
        <main  style={{ marginLeft:isOpen?"-1.7vw":"-21vw", transition:"all 0.5s"}}>
            {/* <Container className={"main "+classBg} style={{ backgroundColor:"#ffffff", marginTop:"20px", paddingTop:"20px", paddingBottom:"50px", alignItems:"center"}} > */}
                {children}
            {/* </Container> */}
        </main>
      </Col>
      
      </Row>
     
      
     
    </Container>
    </>
  )
}