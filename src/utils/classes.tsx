function classes(...names: (string | undefined | false)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

export { classes };
