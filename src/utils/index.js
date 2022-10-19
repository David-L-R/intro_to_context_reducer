export const toTitleCase = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const toSentenceCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
