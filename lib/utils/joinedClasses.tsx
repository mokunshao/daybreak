function joinedClasses(prefix: string = '') {
  return function classesHandler(...names: string[]) {
    return ['daybreak', prefix, ...names].filter(Boolean).join('-');
  };
}

const jc = joinedClasses;

export { joinedClasses, jc };
