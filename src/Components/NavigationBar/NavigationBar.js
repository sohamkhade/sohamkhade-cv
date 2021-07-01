import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import logo from './SOHAM_KHADE-removebg-preview.png';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Navbar.Brand href="#home">
                <span style={{fontFamily: "Florence, cursive"}}>SOHAM KHADE</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="justify-content-end"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;