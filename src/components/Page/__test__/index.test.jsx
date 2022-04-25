import ReactDOM from 'react-dom';
import Page from '../index';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page></Page>, div);
});

it('renders page correctly', () => {
  const { getByTestId } = render(<Page title='Test'></Page>);
  expect(getByTestId('page-test')).toHaveTextContent('Test');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Page title='Test'></Page>).toJSON();
  expect(tree).toMatchSnapshot();
});
