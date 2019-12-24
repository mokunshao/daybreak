import React from 'react';
import {
  render, cleanup, fireEvent,
} from '@testing-library/react';
import Tooltip from '../tooltip';

// since we want to render into the dom need to cleanup
afterEach(cleanup);

// test constants
const text = 'Hello world';
const children = 'Hover over me!';

test('renders the children properly', () => {
  const App = () => <Tooltip render={text}>{children}</Tooltip>;
  const { getByText } = render(<App />);
  expect(getByText(children).innerHTML).toBe(children);
});

test('does not render tooltip initially', () => {
  const App = () => <Tooltip render={text}>{children}</Tooltip>;
  const { queryByText } = render(<App />);
  expect(queryByText(text)).toBeNull();
});

test('renders tooltip on enter and hides on leave', () => {
  const App = () => <Tooltip render={text}>{children}</Tooltip>;
  const { queryByText, getByText } = render(<App />);
  expect(queryByText(text)).toBeNull();

  fireEvent.mouseOver(
    getByText(children),
  );

  expect(queryByText(text)).toBeTruthy();

  fireEvent.mouseLeave(
    getByText(children),
  );
  expect(queryByText(text)).toBeNull();
});

test('renders tooltip on focus and hides on blur', () => {
  const App = () => <Tooltip render={text}>{children}</Tooltip>;
  const { queryByText, getByText } = render(<App />);
  expect(queryByText(text)).toBeNull();

  fireEvent.focus(
    getByText(children),
  );

  expect(queryByText(text)).toBeTruthy();

  fireEvent.blur(
    getByText(children),
  );
  expect(queryByText(text)).toBeNull();
});
