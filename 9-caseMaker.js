const camelCase = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str[i + 1] = str[i + 1].toUpperCase();
      str.splice(i, 1);
    }
  }
  return str.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
