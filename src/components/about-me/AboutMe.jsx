import './AboutMe.scss';
import ProfilePic from '../../assets/profile-pic.png';
import { Container, Col, Row } from 'react-bootstrap';

function AboutMe() {
  return (
    <section className="sectionAbout" id="about-me">
      <h2>ABOUT ME</h2>
      <Container fluid>
        <Row>
          <Col xs={12} lg={4} className="imageContainer">
            <img src={ProfilePic} alt="Rodrigo Lescano" />
          </Col>
          <Col xs={12} lg={8} className="textContainer">
            <div className="sectionAbout--text">
              <p>
                I'm working as an Unix Linux Administrator.
                <br />
                I like challenges and learning new skills, perfecting my working
                methods and always giving my best.
                <br />I have more than 4 years in IT areas, structured and
                teamwork.
              </p>
              <p>My specialities are:</p>
              <ul>
                <li>Recognize, analyze and resolve system failures.</li>
                <li>
                  Ability to apply technology and improve existing systems in
                  clients.
                </li>
                <li>
                  Commitment and fulfillment of the challenges that come up.
                </li>
                <li>
                  Teamwork, communication and collaboration with the areas.
                </li>
              </ul>
            </div>
            <div className="sectionAbout--text__download">
              <a
                href="https://www.linkedin.com/in/rodrigo-lescano-b66333b0/"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                DOWNLOAD CV
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
