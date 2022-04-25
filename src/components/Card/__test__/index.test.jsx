import ReactDOM from 'react-dom';
import Card from '../index';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card></Card>, div);
});

it('renders card correctly', () => {
  const { getByTestId } = render(<Card title='Test'></Card>);
  expect(getByTestId('card-test')).toHaveTextContent('Test');
});

it('renders card correctly', () => {
  const { getByTestId } = render(<Card title='Test123'></Card>);
  expect(getByTestId('card-test')).toHaveTextContent('Test123');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Card title='Test'></Card>).toJSON();
  expect(tree).toMatchSnapshot();
});
