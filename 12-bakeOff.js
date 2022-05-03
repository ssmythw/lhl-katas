const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  // each bakery has an array of ingredients
  // recipes is an array of recipes, each recipe is an object with name and 2 ingredients
  // step 1: find out if bakery has an ingredient in the recipes
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
