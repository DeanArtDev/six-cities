const extend = (a: object, b: object): object => {
  const emptyObj: object = {};

  return Object.assign(emptyObj, a, b);
};

export default extend;
