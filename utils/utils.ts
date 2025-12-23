export const camelCaseToTitle = (text: string) => {
  if (!text) return "";

  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};
