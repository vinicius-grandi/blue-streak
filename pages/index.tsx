import type { NextPage } from 'next';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import OrderButton from '../public/images/order-button.png';
import Footer from '../components/Footer';

const Home: NextPage = () => (
  <>
    <NavBar style={{ backgroundColor: '#5b627e' }}>
      <NavBar.Brand style={{
        padding: '0.5rem',
        fontSize: '2rem',
        fontFamily: "'Varela Round', sans-serif",
      }}
      >
        BLUE STREAK

      </NavBar.Brand>
    </NavBar>
    <main>
      <Container style={{ padding: '1rem', backgroundColor: '#5b627ebe', color: '#ebe7e7' }} fluid>
        <Row>
          <h2>Boredom Solver Pills</h2>
          <ul>
            <li>Imaginary pills to cure your boredom</li>
          </ul>
        </Row>
      </Container>
      <Container style={{ padding: '1rem' }}>
        <Row xs="2" xl="3">
          <Col>
            <a href="https://trustlock.co" target="_blank" rel="noreferrer">
              <Image
                style={{ border: 0 }}
                layout="responsive"
                alt="Trust Badges"
                src="https://trustlock.co/wp-content/uploads/2019/01/guaranteed-safe-checkout-5.png"
                width="238"
                height="44"
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col style={{ alignSelf: 'center' }} xl="4" xs="5">
            <a href="https://trustlock.co" target="_blank" rel="noreferrer">
              <Image
                alt="Trust Badges"
                style={{ border: 0 }}
                layout="responsive"
                src="https://trustlock.co/wp-content/uploads/2019/01/money-back-guarantee-badge-square-9.png"
                width="171"
                height="75"
              />
            </a>
          </Col>
          <Col xs={7}>
            <a href="https://pag.ae/7YjRT8kcM" target="_blank" rel="noreferrer">
              <Image src={OrderButton} alt="pagseguro-button" />
            </a>
          </Col>
        </Row>
        <Row xs="2" xl="3">
          <Col>
            <a href="https://trustlock.co" target="_blank" rel="noreferrer">
              <Image
                alt="Trust Badges"
                style={{ border: 0 }}
                layout="responsive"
                src="https://trustlock.co/wp-content/uploads/2019/01/free-shipping-icon-graphic-100-or-more-blue-3.png"
                width={238}
                height={44}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <ul style={{ padding: '1rem', backgroundColor: '#5b627ebe', color: '#ebe7e7' }}>
        <li>
          Just imagine the pill on your hand and then you swallow it
        </li>
        <li>
          It&#39;s okay to do that because, after
          allowedNodeEnvironmentFlags, it&#39;s just an imaginary product
        </li>
      </ul>
    </main>
    <Footer />
  </>
);

export default Home;
