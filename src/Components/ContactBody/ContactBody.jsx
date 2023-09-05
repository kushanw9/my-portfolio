import React from 'react'
import './contactBody.css'
import Form from 'react-bootstrap/Form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TextField } from '@mui/material';
import NewButton from '../NewButton/NewButton';

export default function ContactBody() {
  return (
    <div className='contactBodyBox d-flex flex-column'>
      <div className="contactImage">
        <img src="/images/contact/contact.jpg" alt="" className="contactImg" />
      </div>
      <div className="contactContainer d-flex">
        <div className="contactDetails">
            <div className="contactBox">
                <CallIcon/>
                <div className="contactText"><span>+94719872168</span></div>
            </div>

            <div className="contactBox">
                <MailOutlineIcon/>
                <div className="contactText">
                    <span>kushan.oe@gmail.com</span>
                </div>
            </div>

            <div className="contactBox">
                <LocationOnIcon/>
                <div className="contactText"><span>No:50, Danowita Road, Thawalampitiya, Mirigama, Sri Lanka </span></div>
            </div>
        </div>
        <div className="contactForm">
            <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter the email address" />
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter the subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
            </Form>
            <NewButton text="SUBMIT"/>
        </div>
      </div>
    </div>
  )
}
