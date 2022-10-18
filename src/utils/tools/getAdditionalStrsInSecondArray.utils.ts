export default function getAdditionalStrsInSecondArray(arr1: string[], arr2: string[]) {
  const a = [...new Set(arr1.filter((x) => x != null).map((x) => x.toLowerCase()))];
  const b = [...new Set(arr2.filter((x) => x != null).map((x) => x.toLowerCase()))];

  return b.filter((x) => a.includes(x) === false);
}