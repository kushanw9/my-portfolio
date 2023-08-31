import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './header.css'


export default function Header() {
    
  return (
    <div className='headerContainer'>
        
        <div  className="navBar">
            <Navbar sticky="top" bg="dark" data-bs-theme="dark">
            <img src="/images/logo.png" alt="" className="logoImage" />

            <Container>
          
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#abuot">About</Nav.Link>
                <Nav.Link href="#works">Works</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#blogs">Blogs</Nav.Link>
                <div className="btnContainer"><Button size='sm' className='btnHire' variant="outline-warning">Hire Me</Button>{' '}</div>
                
            </Nav>
            
            </Container>
            
        </Navbar>
        </div>
 
    </div>
  )
}

