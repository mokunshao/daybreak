function joinedClasses(prefix: string = '') {
  return function classesHandler(...names: (string | undefined)[]) {
    return ['daybreak', prefix, ...names].filter(Boolean).join('-');
  };
}

const jc = joinedClasses;

export { joinedClasses, jc };
