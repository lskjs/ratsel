export const capitalizeFirstLetter = ([first, ...rest]: string, locale?: string) =>
  first.toLocaleUpperCase(locale) + rest.join('');
