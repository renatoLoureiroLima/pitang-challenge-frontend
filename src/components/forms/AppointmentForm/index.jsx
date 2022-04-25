import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { setMinutes, setHours } from 'date-fns';
import DateInput from '../../input/DateInput';
import { schedulingFormSchema } from '../../../services/validations/forms';
import axios from '../../../services/api/index';

const initialValues = {
  name: '',
  birthday: null,
  selectedDate: null,
};

const filterPassedTime = (time) => {
  const currentDate = new Date();
  const selectedDate = new Date(time);

  return currentDate.getTime() < selectedDate.getTime();
};

const onSubmit = async (values) => {
  await axios
    .post('/appointment', {
      name: values.name,
      birthday: values.birthday,
      selectedDate: values.selectedDate,
    })
    .then(() => {
      toast.info('Agendamento concluído!');
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
};

const now = new Date();

const AppointmentForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={schedulingFormSchema}
    onSubmit={onSubmit}
  >
    {(formik) => (
      <Form className='form'>
        <div className='form-group form-focus'>
          <label className='focus-label' htmlFor='name'>
            Nome
          </label>
          <Field
            className={`form-control floating ${formik.errors.name && 'error'}`}
            type='text'
            id='name'
            name='name'
            data-testid='nameform-test'
          />
          <ErrorMessage
            component='span'
            className='error'
            name='name'
            data-testid='error-name-test'
          />
        </div>

        <DateInput
          name='birthday'
          label='Data de Nascimento '
          maxDate={new Date()}
          data-testid='birthdayform-test'
        />

        <DateInput
          name='selectedDate'
          label='Data para Vacinação '
          showTimeSelect
          minDate={new Date()}
          minTime={setHours(setMinutes(now, 0), 6)}
          maxTime={setHours(setMinutes(now, 0), 18)}
          timeIntervals={60}
          filterTime={filterPassedTime}
          data-testid='dateform-test'
        />

        <div className='d-flex flex-row-reverse'>
          <button
            className='btn btn-primary btn-md'
            type='submit'
            disabled={!formik.dirty && formik.isValid}
            data-testid='buttonform-test'
          >
            Agendar
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default AppointmentForm;
