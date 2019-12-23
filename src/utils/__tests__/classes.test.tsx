import classes from '../classes';

describe('classes', () => {
  it('接受0个 className', () => {
    const result = classes();
    expect(result).toEqual('');
  });
  it('接受1个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受的 className 中含有 undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
});
