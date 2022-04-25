import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppointmentList from '../../components/AppointmentList';
import Page from '../../components/Page';

function AppointmentView() {
  return (
    <div>
      <Page title='Lista de agendamentos'>
        <AppointmentList />
        <Link to='/'>
          <Button variant='outline-secondary'> Voltar </Button>
        </Link>
      </Page>
    </div>
  );
}

export default AppointmentView;
