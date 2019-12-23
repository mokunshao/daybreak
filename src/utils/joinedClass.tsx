function joinedClass(...prefix: (string | undefined)[]) {
  return function classesHandler(...names: (string | undefined)[]) {
    return ['daybreak', ...prefix, ...names].filter(Boolean).join('-');
  };
}

export default joinedClass;

export { joinedClass };
