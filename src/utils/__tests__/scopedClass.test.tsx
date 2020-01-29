import scopedClassMaker from '../scopedClass';

describe('joinedClass', () => {
  it('接受0个 参数', () => {
    const fn = scopedClassMaker('daybreak');
    expect(fn('')).toEqual('daybreak');
  });
  it('接受1个 参数', () => {
    const fn = scopedClassMaker('daybreak');
    expect(fn('a')).toEqual('daybreak-a');
    expect(fn({ b: true })).toEqual('daybreak-b');
  });
  it('接受2个 参数', () => {
    const fn = scopedClassMaker('daybreak');
    expect(fn('e', { extra: 'a' })).toEqual('daybreak-e a');
    expect(fn({ b: true }, { extra: 'a' })).toEqual('daybreak-b a');
    expect(fn({ b: true, c: false }, { extra: 'a' })).toEqual('daybreak-b a');
    expect(fn({ c: true, b: true }, { extra: 'a' })).toEqual('daybreak-c daybreak-b a');
  });
});
