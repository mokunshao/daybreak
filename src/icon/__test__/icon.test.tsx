import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Icon from '../icon';

describe('Icon', () => {
  it('是个 svg', () => {
    const json = renderer.create(<Icon name="qq" />).toJSON();
    expect(json).toMatchSnapshot();
  });
  it('onClick', () => {
    const fn = jest.fn();
    const icon = mount(<Icon name="qq" onClick={fn} />);
    icon.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});
