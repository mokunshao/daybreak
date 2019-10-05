import classes from './classes';
import { joinedClasses } from './joinedClasses';

interface Options {
  extra: string
}

const scopedClass = (prefix: string) => {
  const joinedClasseMaker = joinedClasses(prefix);
  return function classMaker(name: string, options: Options) {
    return classes(joinedClasseMaker(name), options.extra);
  };
};

export default scopedClass;
