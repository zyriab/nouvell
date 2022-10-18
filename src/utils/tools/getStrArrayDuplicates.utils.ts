export default function getStrArrayDuplicates(arr1: string[], arr2: string[]) {
  const duplicates: string[] = [];

  const a = <string[]>[
    ...new Set(arr1.filter((x) => x != null).map((x) => x.toLowerCase())),
  ];
  const b = <string[]>[
    ...new Set(arr2.filter((x) => x != null).map((x) => x.toLowerCase())),
  ];

  a.forEach((x) => (b.find((y) => y === x) != null ? duplicates.push(x) : ''));

  return duplicates;
}
