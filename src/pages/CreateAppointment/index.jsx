import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Page from '../../components/Page';
import AppointmentForm from '../../components/forms/AppointmentForm';

function CreateAppointmentPage() {
  return (
    <div>
      <Page title='Preencha o formulário abaixo para agendar sua consulta: '>
        <AppointmentForm />
        <Link to='/'>
          <Button variant='outline-secondary'> Voltar </Button>
        </Link>
      </Page>
    </div>
  );
}

export default CreateAppointmentPage;
