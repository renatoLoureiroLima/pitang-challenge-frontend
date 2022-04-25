import ReactDOM from 'react-dom';
import AppointmentForm from '../index';

import {
  render,
  act,
  fireEvent,
  screen,
  cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import api from '../../../../services/api';

jest.mock('../../../../services/api');

afterEach(cleanup);

describe('Appointment Form', () => {
  describe('with valid inputs', () => {
    test('calls the onSubmit function', async () => {
      const mockOnSubmit = api.post.mockResolvedValue();
      await render(<AppointmentForm />);

      await act(async () => {
        fireEvent.change(screen.getByLabelText('Nome'), {
          target: { value: 'Ronaldo Vanderlei' },
        });
        fireEvent.change(screen.getByLabelText('Data de Nascimento'), {
          target: {
            value: new Date(
              'Sun Jun 13 1999 00:00:00 GMT-0300 (Horário Padrão de Brasília)'
            ),
          },
        });
        fireEvent.change(screen.getByLabelText('Data para Vacinação'), {
          target: {
            value: new Date(
              'Fri May 28 2021 15:00:00 GMT-0300 (Horário Padrão de Brasília)'
            ),
          },
        });
      });

      await act(async () => {
        userEvent.click(screen.getByText('Agendar'));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppointmentForm />, div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<AppointmentForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('invalid name', async () => {
  const { getByLabelText } = render(<AppointmentForm />);

  await act(async () => {
    const nameInput = getByLabelText('Nome');
    fireEvent.change(nameInput, { target: { value: '@7Lucas' } });
    fireEvent.blur(nameInput);
  });
  expect(screen.getByTestId('nameform-test')).toHaveValue('@7Lucas');
  expect(screen.queryByTestId('error-name-test')).toBeInTheDocument();
});
