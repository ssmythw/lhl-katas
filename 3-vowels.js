const numberOfVowels = (str) => {
  // Straight forward - just count the number of vowles in the str variable
  let count = 0;
  let vowels = "aieou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("someword"));
