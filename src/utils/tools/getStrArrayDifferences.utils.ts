import getStrArrayDuplicates from './getStrArrayDuplicates.utils';

export default function getStrArrayDifferences(arr1: string[], arr2: string[]) {
  const duplicates = getStrArrayDuplicates(arr1, arr2);

  return [
    ...new Set(
      arr1
        .concat(arr2)
        .filter((x) => duplicates.includes(x.toLowerCase()) === false)
        .map((x) => x.toLowerCase())
    ),
  ];
}
