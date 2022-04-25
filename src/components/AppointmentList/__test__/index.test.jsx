import ReactDOM from 'react-dom';
import AppointmentList from '../index';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppointmentList></AppointmentList>, div);
});

it('renders table properly', () => {
  const { getByTestId } = render(<AppointmentList></AppointmentList>);
  expect(getByTestId('appointmentlist-test')).toHaveDisplayValue;
});

it('matches snapshot', () => {
  const tree = renderer.create(<AppointmentList></AppointmentList>).toJSON();
  expect(tree).toMatchSnapshot();
});
