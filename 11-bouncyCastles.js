const PI = 3.14159;

const sphereVolume = (radius) => {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

const coneVolume = (radius, height) => {
  return (1 / 3) * height * PI * Math.pow(radius, 2);
};

const prismVolume = (height, width, depth) => {
  return height * width * depth;
};

console.log(sphereVolume(10));
console.log(coneVolume(3, 5));
console.log(prismVolume(3, 4, 5)); //60

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

const totalVolume = (array) => {
  //calculate the volume of each item in the input array

  let totalVolume = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].type === "sphere") {
      totalVolume += sphereVolume(array[i].radius);
    }
    if (array[i].type === "cone") {
      totalVolume += coneVolume(array[i].radius, array[i].height);
    }
    if (array[i].type === "prism") {
      totalVolume += prismVolume(
        array[i].height,
        array[i].width,
        array[i].depth
      );
    }
  }
  return totalVolume;
};

console.log(totalVolume(duck));
