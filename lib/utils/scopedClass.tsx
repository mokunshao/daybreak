interface Options {
  extra: string | undefined
}

interface Toggle {
  [key: string]: boolean
}

const scopedClassMaker = (prefix: string) => function x(name?: string | Toggle, option?: Options) {
  let name2;
  let result;
  if (typeof name === 'string' || name === undefined) {
    name2 = name;
    result = [prefix, name2].filter(Boolean).join('-');
  } else {
    name2 = Object.entries(name).filter((v) => v[1]).map((v) => v[0]);
    result = name2.map((n) => [prefix, n].filter(Boolean).join('-')).join(' ');
  }
  if (option && option.extra) {
    return [result, option.extra].filter(Boolean).join(' ');
  }
  return result;
};

export default scopedClassMaker;
