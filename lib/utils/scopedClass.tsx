import classes from './classes';
import joinedClass from './joinedClass';

interface Options {
  extra: string
}

const scopedClass = (prefix: string) => {
  const joinedClasseMaker = joinedClass(prefix);
  return function classMaker(name: string, options: Options) {
    return classes(joinedClasseMaker(name), options.extra);
  };
};

export default scopedClass;
