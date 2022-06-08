import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Footer(): JSX.Element {
  return (
    <Container style={{ backgroundColor: '#5b627e' }} fluid as="footer" className="mt-auto">
      <Row style={{ color: 'white', fontWeight: 600 }}>
        <Col style={{ display: 'flex', flexDirection: 'column' }}>
          <p>information</p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="border-0" style={{ backgroundColor: '#5b627e' }}>
              contact us
            </ListGroup.Item>
            <ListGroup.Item as="li" className="border-0" style={{ backgroundColor: '#5b627e' }}>
              FAQ
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col style={{ display: 'flex', flexDirection: 'column' }}>
          <p>legal</p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="border-0" style={{ backgroundColor: '#5b627e' }}>
              TOS
            </ListGroup.Item>
            <ListGroup.Item as="li" className="border-0" style={{ backgroundColor: '#5b627e' }}>
              privacy policy
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
