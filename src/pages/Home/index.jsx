import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';

function Home() {
  return (
    <div>
      <Page title='Selecione uma das opções'>
        <div>
          <Link to='/agendamento'>
            <Button className='m-2'>Agendar</Button>
          </Link>

          <Link to='/lista'>
            <Button>Lista de agendamentos</Button>
          </Link>
        </div>
      </Page>
    </div>
  );
}

export default Home;
