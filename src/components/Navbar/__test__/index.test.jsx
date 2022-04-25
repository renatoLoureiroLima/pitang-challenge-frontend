import ReactDOM from 'react-dom';
import Navbar from '../index';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar></Navbar>, div);
});

it('renders navbar correctly', () => {
  const { getByTestId } = render(<Navbar></Navbar>);
  expect(getByTestId('navbar-test')).toHaveTextContent('Challenge Pitang');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Navbar></Navbar>).toJSON();
  expect(tree).toMatchSnapshot();
});
