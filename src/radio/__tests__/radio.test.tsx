import React, {
  useState, ChangeEventHandler,
} from 'react';
import { render } from '@testing-library/react';
import { Radio } from '../radio';
import { RadioGroup } from '../radio-group';

function Example() {
  const [value, setValue] = useState('yes');
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <RadioGroup value={value} onChange={onChange}>
        <Radio name="confirm" value="yes">Yes</Radio>
        <Radio name="confirm" value="no">No</Radio>
      </RadioGroup>
    </div>
  );
}

describe('Radio', () => {
  it('exits', () => {
    expect(Radio).toBeTruthy();
    expect(RadioGroup).toBeTruthy();
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});
