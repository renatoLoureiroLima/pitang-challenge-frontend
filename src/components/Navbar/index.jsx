import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div>
      <Navbar
        className='justify-content-center'
        bg='primary'
        variant='dark'
        data-testid='navbar-test'
      >
        <Link to='/'>
          <Navbar.Brand>Challenge Pitang</Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
}

export default index;
