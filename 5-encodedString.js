const urlEncode = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str.splice(i, 1, "%20");
    }
  }
  str = str.join("");
  return str;
};

//TESTS

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
