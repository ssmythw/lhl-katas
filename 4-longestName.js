const instructorWithLongestName = (arr) => {
  let longest = 0;
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.length > longest) {
      longest = arr[i].name.length;
      result = { name: arr[i].name, course: arr[i].course };
    }
  }
  return result;
};

//TESTS

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
