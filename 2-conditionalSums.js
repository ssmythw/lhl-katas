//For this kata, we'll be adding only the numbers in the array which match the given condition.

const conditionalSum = (arr, condition) => {
  let total = 0;
  if (arr.length === 0) return 0;
  if (condition === "even") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) total += arr[i];
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1) total += arr[i];
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
