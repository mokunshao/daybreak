interface Options {
  extra: string | undefined;
}

interface Toggle {
  [key: string]: boolean;
}

const scopedClassMaker = (prefix: string) => (
  name: string | Toggle,
  option?: Options,
) => Object.entries(name instanceof Object ? name : { [name]: true })
  .filter((v) => v[1])
  .map((v) => v[0])
  .map((n) => [prefix, n].filter(Boolean).join('-'))
  .concat((option && option.extra) || [])
  .join(' ');

export default scopedClassMaker;
