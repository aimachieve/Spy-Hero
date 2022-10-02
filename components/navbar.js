import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../public/images/logo3.png';

import {
    FaBars,
    FaSignOutAlt,
    FaTh,
    FaUserAlt
} from 'react-icons/fa'

function Header(props) {
   
  return (
    <>
    <Navbar className="nav-bg-color" >
    <Container >
      <Navbar.Brand style={{ display:"flex" }}>
        <Image
              src={Logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
                        <FaBars onClick={()=>props.onClick()} className="bar"/>
                    
      </Navbar.Brand>
      <Nav className="justify-content-end">
      <Nav.Link className="nav-width">
            Welcome, John
      </Nav.Link>
        <Nav.Link href="#" className="nav-width" style={{ display:"flex", alignItems:"center" }}>
        <FaUserAlt style={{ marginRight:"5px" }} />
        Account</Nav.Link>
        
        <Nav.Link href="#" style={{ display:"flex", alignItems:"center" }}><FaSignOutAlt style={{ marginRight:"5px" }} />Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  );
}

export default Header;