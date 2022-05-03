const multiplicationTable = function (maxValue) {
  let str = "";

  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      str += j * i + " ";
    }
    str = str + "\n";
  }
  console.log(str);
};

console.log(multiplicationTable(10));
