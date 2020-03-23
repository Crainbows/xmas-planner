export const findAllIndexes = (arr: any[], callback: Function): number[] => {
  let indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (callback()) indexes.push(i);
  return indexes;
};
