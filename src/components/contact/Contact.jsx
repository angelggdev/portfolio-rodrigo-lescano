import { IoLogoWhatsapp } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="sectionContact">
      <h2>CONTACT ME</h2>
      <IoLogoWhatsapp size={'80px'} />
      <IoLogoLinkedin size={'80px'} />
      <IoLogoGithub size={'80px'} />
      <IoMdMail size={'80px'} />
      <h3>Complete the form and I will contact you!</h3>
      {/* cambiar email por email de rodrigo */}
      <Container
        fluid
        as={Form}
        action="https://formsubmit.co/angelggdev@gmail.com"
        method="POST"
      >
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formBasicText">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" size="lg" name="firstName" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicText">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" size="lg" name="lastName" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" size="lg" name="email" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} size="lg" name="message" />
          </Form.Group>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            SEND
          </Button>
        </Row>
      </Container>
      <p>THANK YOU!</p>
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_jcqksgfq.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '150px', margin:'0 auto 0 auto'}}
        loop
        autoplay
      ></lottie-player>
    </section>
  );
}

export default Contact;
