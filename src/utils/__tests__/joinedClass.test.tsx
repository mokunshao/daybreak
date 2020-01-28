import joinedClass from '../joinedClass';

describe('joinedClass', () => {
  it('接受0个 参数', () => {
    const fn = joinedClass();
    expect(fn()).toEqual('daybreak');
  });
  it('接受1个 参数', () => {
    const fn = joinedClass('a');
    expect(fn()).toEqual('daybreak-a');
  });
  it('接受2个 参数', () => {
    const fn = joinedClass('a', 'b');
    expect(fn()).toEqual('daybreak-a-b');
  });
  it('接受的 参数 中含有 undefined', () => {
    const fn = joinedClass('a', undefined);
    expect(fn()).toEqual('daybreak-a');
  });
  it('返回的函数依然可以接受参数', () => {
    const fn = joinedClass('a');
    expect(fn('b')).toEqual('daybreak-a-b');
    expect(fn('b', 'c')).toEqual('daybreak-a-b-c');
  });
});
