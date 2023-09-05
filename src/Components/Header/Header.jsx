import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './header.css'
import { LinkContainer } from 'react-router-bootstrap'; 


export default function Header() {
    
  return (
    <div className='headerContainer'>
        
        <div  className="navBar">
            <Navbar sticky="top" bg="dark" data-bs-theme="dark">
            <img src="/images/logo.png" alt="" className="logoImage" />

            <Container>
          
            <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/works">
                <Nav.Link>Works</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
                <div className="btnContainer"><Button size='sm' className='btnHire' variant="outline-warning">Hire Me</Button>{' '}</div>
                
            </Nav>
            
            </Container>
            
        </Navbar>
        </div>
 
    </div>
  )
}

