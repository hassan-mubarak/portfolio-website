import { useState } from "react"; 
import { Container, Row, Col } from "react-bootstrap"; 
import contactImg from "../assets/img/hassan-mubarak.jpeg";
import TrackVisibility from 'react-on-screen'; 
import emailjs from '@emailjs/browser'; 

export const Contact = () => { 
  const formInitialDetails = { 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    message: '' 
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails); 
  const [buttonText, setButtonText] = useState('Send'); 
  const [status, setStatus] = useState({}); 

  const onFormUpdate = (category, value) => { 
      setFormDetails({ 
        ...formDetails, 
        [category]: value 
      });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setButtonText("Sending..."); 

    const serviceID = "service_8dhi3hq"; 
    const templateID = "template_9plmnci"; 
    const publicKey = "5YuYhhPajcjUYFJdo"; 

    const templateParams = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setButtonText("Send");
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormDetails(formInitialDetails); 
      }, (err) => {
        setButtonText("Send");
        setStatus({ success: false, message: 'Something went wrong, please try again.' });
      });
  }; 

  return ( 
    <section className="contact-section" id="connect"> 
      <Container> 
        <Row className="align-items-center"> 
          <Col size={12} md={6}> 
            <div className="contact-image">
              <img src={contactImg} alt="Contact Us"/> 
            </div>
          </Col> 
          <Col size={12} md={6}> 
            <div className="contact-form">
              <h2>Get In Touch</h2> 
              <form onSubmit={handleSubmit}> 
                <Row> 
                  <Col size={12} sm={6} className="px-1"> 
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> 
                  </Col> 
                  <Col size={12} sm={6} className="px-1"> 
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/> 
                  </Col> 
                  <Col size={12} sm={6} className="px-1"> 
                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} /> 
                  </Col> 
                  <Col size={12} sm={6} className="px-1"> 
                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/> 
                  </Col> 
                  <Col size={12} className="px-1"> 
                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> 
                    <button type="submit" className="send-btn"><span>{buttonText}</span></button> 
                  </Col> 
                  { 
                    status.message && 
                    <Col> 
                      <p className={status.success === false ? "danger" : "success"}>
                        {status.message}
                      </p> 
                    </Col> 
                  } 
                </Row> 
              </form> 
            </div>
          </Col> 
        </Row> 
      </Container> 
    </section> 
  ); 
};