const checkAir = (samples, threshold) => {
  let totalDirty = 0;
  let thresh = samples.length * threshold;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      totalDirty++;
    }
  }
  console.log(thresh);
  console.log(totalDirty);
  if (totalDirty < Math.floor(thresh)) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);
