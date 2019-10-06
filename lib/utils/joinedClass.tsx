function joinedClass(prefix: string = '') {
  return function classesHandler(...names: (string | undefined)[]) {
    return ['daybreak', prefix, ...names].filter(Boolean).join('-');
  };
}

export default joinedClass;
