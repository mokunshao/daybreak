import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../icon';

describe('Icon', () => {
  it('是个 svg', () => {
    const json = renderer.create(<Icon name="qq" />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
