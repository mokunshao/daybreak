import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  Dialog, Modal, Confirm, Alert,
} from '../dialog';
import Button from '../../button/button';

function Example() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type="button" onClick={() => setVisible(!visible)}>Open</Button>
      <Dialog
        visible={visible}
        buttons={
          [
            <Button type="button" onClick={() => setVisible(false)}>Yes</Button>,
            <Button type="button" onClick={() => setVisible(false)}>No</Button>,
          ]
        }
        onClose={() => setVisible(false)}
      >
        hello
      </Dialog>
    </div>
  );
}

describe('Tabs', () => {
  it('exits', () => {
    expect(Dialog).toBeTruthy();
    expect(Modal).toBeTruthy();
    expect(Confirm).toBeTruthy();
    expect(Alert).toBeTruthy();
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dialog', () => {
    const handleClose = jest.fn();

    function Example0() {
      const [visible, setVisible] = useState(false);
      const onClose = () => {
        setVisible(false);
        handleClose();
      };
      return (
        <div>
          <Button type="button" onClick={() => setVisible(!visible)}>Open</Button>
          <Dialog
            visible={visible}
            buttons={
              [
                <Button type="button" onClick={() => setVisible(false)}>Yes</Button>,
                <Button type="button" onClick={() => setVisible(false)}>No</Button>,
              ]
            }
            onClose={onClose}
          >
            hello
          </Dialog>
        </div>
      );
    }

    const { getByText, queryByText } = render(
      <Example0 />,
    );

    expect(queryByText('hello')).toBeNull();

    fireEvent.click(getByText('Open'));

    expect(getByText('hello')).toBeTruthy();

    expect(handleClose).toHaveBeenCalledTimes(0);

    fireEvent.click(getByText('X').parentElement as Element);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Alert', () => {
    const msg = 'This is an alert.';
    const buttonText = 'Open';
    function Example2() {
      return (
        <Button type="button" onClick={() => Alert(msg)}>{buttonText}</Button>
      );
    }
    const { queryByText, getByText } = render(<Example2 />);
    const button = getByText(buttonText);
    expect(queryByText(msg)).toBeNull();
    fireEvent.click(button);
    expect(queryByText(msg)).toBeTruthy();
    const okButton = getByText('OK');
    fireEvent.click(okButton);
    expect(queryByText(msg)).toBeNull();
  });
});
