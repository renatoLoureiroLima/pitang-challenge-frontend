import { Card } from 'react-bootstrap';

function index({ title, children }) {
  return (
    <Card data-testid='card-test'>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default index;
