import classes from './classes';
import { joinedClasses } from './joinedClasses';

interface Options {
  extra: string | (string | undefined)[]
}

const scopedClass = (prefix: string) => {
  const joinedClasseMaker = joinedClasses(prefix);
  return function x(name: string | (string | undefined)[], options: Options) {
    return classes(joinedClasseMaker(...name), ...options.extra);
  };
};

export default scopedClass;
