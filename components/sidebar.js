import React,{useState} from 'react';
import { NavLink } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

import {
    FaBars,
    FaTh,FaSearch, FaSearchengin, FaPager, FaHospitalAlt, FaDollarSign, FaServer, FaBell, FaHeart, FaFolder, FaQuestion, FaUserGraduate, FaSignOutAlt, FaLightbulb, FaTrafficLight, FaEnvelopeSquare
} from 'react-icons/fa'

  const Sidebar = (props) => {
    
    const menuItems = [
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh />
        },
        {
            path:"/search",
            name:"Search",
            icon:<FaSearchengin />
        },
        {
            path:"/pagesearch",
            name:"Page Search",
            icon:<FaSearch />
        },
        {
            path:"/landingpages",
            name:"Landing Pages",
            icon:<FaHospitalAlt />
        },
        {
            path:"/offers",
            name:"Offers",
            icon:<FaDollarSign />
        },
        {
            path:"/reports",
            name:"Reports",
            icon:<FaServer />
        },
        {
            path:"/alerts",
            name:"Alerts",
            icon:<FaBell />
        },
        {
            path:"/favorites",
            name:"Favorites",
            icon:<FaHeart />
        },
        {
            path:"new",
            title:"TRAINING & MORE"
        },
        {
            path:"/trainings",
            name:"Training & Tutorial",
            icon:<FaUserGraduate />
        },
        {
            path:"//google.com",
            name:"Get Spy Boss",
            icon:<FaLightbulb />
        },
        {
            path:"//google.com",
            name:"Quity 9 to 5 Blog",
            icon:<FaTrafficLight />
        },
        {
            path:"/contact",
            name:"About / Contact Us",
            icon:<FaEnvelopeSquare />
        },
        {
            path:"/trainings",
            name:"Training",
            icon:<FaUserGraduate />
        },
        {
            path:"/notes",
            name:"Notes",
            icon:<FaFolder />
        },
        {
            path:"/supports",
            name:"Supports",
            icon:<FaQuestion />
        },
        {
            path:"new",
            title:"LOGOUT"
        },
        {
            path:"/supports",
            name:"Logout",
            icon:<FaSignOutAlt />
        }
    ];

    return (
        // <div className="containers">
            <div className="sidebar" style={{width: props.isOpen ? "250px": "50px"  }}>
                <div className="top_section">
                    <h6 className="logo" style={{ display:props.isOpen?"block": "none" }}>Spy Boss Suite</h6>
                    {/* <div className="bars">
                        <FaBars />
                    </div> */}
                </div>
                {
                    menuItems.map((item, index) => (
                            item.path=="new"?(
                                <div className="top_section" key={index}>
                                <h6 className="logo" style={{ display:props.isOpen?"block": "none" }}>{item.title}</h6>  
                                </div>
                            ):
                            <NavLink href={item.path} key={index} className="link" >
                                <div className="icon">{item.icon}</div>
                                <div className="link_text"style={{ display: props.isOpen?"block":"none"}}>{item.name}</div>
                            </NavLink>
                    ))
                }
            </div>
            // </div>
    //     <Nav className="flex-column" style={{ display: 'flex', width:'235px', height: '100vh', overflow: 'scroll initial', backgroundColor: '#ffffff',marginTop:"21px", marginLeft:"16px" }}>
    //     <Nav.Link eventKey="link-1">Link</Nav.Link>
    //     <Nav.Link eventKey="link-2">Link</Nav.Link>
    //   </Nav>
    );
  };
  
  export default Sidebar;