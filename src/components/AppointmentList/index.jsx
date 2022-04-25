import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../../services/api';

function AppointmentList() {
  const [appointments, setAppointments] = useState(null);

  const fetchData = async () => {
    await axios
      .get('/appointment')
      .then((response) => {
        setAppointments(
          response.data.appointments.map((appointment) => {
            return {
              ...appointment,
              birthday: new Date(appointment.birthday),
              selectedDate: new Date(appointment.selectedDate),
            };
          })
        );
      })
      .catch(() => toast.error('Oops, aconteceu algo de errado!'));
  };

  const dateMask = (date) => {
    const dashed = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    return dashed;
  };

  const dateMaskHour = (date) => {
    const dashed = format(new Date(date), "dd/MM/yyyy' - 'HH:mm");

    return dashed;
  };

  const isAttended = async ({ target: { checked } }, appointment) => {
    const newAppointments = appointments.map((newAppointment) => {
      if (newAppointment._id === appointment._id) {
        return {
          ...newAppointment,
          attended: checked,
        };
      }
      return newAppointment;
    });

    await axios
      .put(`/appointment/${appointment._id}`, {
        name: appointment.name,
        attended: checked,
      })
      .then(
        checked
          ? toast.success('Atendimento concluído')
          : toast.error('Atendimento não concluído')
      );

    setAppointments(newAppointments);
  };

  useEffect(() => {
    if (!appointments) fetchData();
  }, []);

  return (
    <>
      <Table data-testid='appointmentlist-test'>
        <thead>
          <tr>
            <th>Nome: </th>
            <th>Data de nascimento </th>
            <th>Data do Atendimento </th>
            <th>Antedimento </th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments
              .sort((a, b) => {
                return new Date(a.selectedDate) - new Date(b.selectedDate);
              })
              .map((appointment) => (
                <tr key={appointment.index}>
                  <td>{appointment.name}</td>
                  <td>{dateMask(appointment.birthday)}</td>
                  <td>{dateMaskHour(appointment.selectedDate)}</td>
                  <td>
                    <input
                      onChange={(event) => isAttended(event, appointment)}
                      checked={appointment.attended}
                      type='checkbox'
                    />

                    <span className='m-4'>
                      {appointment.attended
                        ? 'Concluído'
                        : 'Aguardando atendimento'}
                    </span>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
}

export default AppointmentList;
