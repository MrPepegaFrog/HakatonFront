type ModeType = Record<string, boolean | string>;

export const clsx = (...params: Array<string | ModeType | undefined>): string => {
  const stringsClassNames: string[] = [];

  let hashClassNamesObject: ModeType = {};

  params.filter(Boolean).forEach((elem) => {
    if (typeof elem === 'string') {
      return stringsClassNames.push(elem);
    }

    hashClassNamesObject = Object.assign(hashClassNamesObject, elem);
  });

  const updateModes = Object.entries(hashClassNamesObject)
    .filter(([_, value]) => value)
    .map(([cls]) => cls);

  return stringsClassNames.concat(updateModes).join(' ');
};