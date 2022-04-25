import { Container } from 'react-bootstrap';

import Card from '../Card';

function index({ title, children }) {
  return (
    <Container className='mt-4' data-testid='page-test'>
      <Card title={title}>{children}</Card>
    </Container>
  );
}

export default index;
