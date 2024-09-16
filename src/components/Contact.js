import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    from_name: '',
    from_email: '',
    from_phone: '',
    message: '',
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4mqpblt', 'template_kszxvdn', form.current, 'D1ibLPPdac_uDvk_Z')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus({ success: true, message: 'Message sent successfully' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
        
      );

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" name="from_name" placeholder="First Name" />
                    </Col>
                    
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" name="from_email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="tel" name="from_phone" placeholder="Phone No." />
                    </Col>
                    <Col size={12} sm={12}  className="px-1">
                      <textarea rows="6" name="message" placeholder="Message" />
                      <input type="submit" value={buttonText} />
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
