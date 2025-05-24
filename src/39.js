function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:

console.log(getRandomInt(1, 10)); // Output: a random integer between 1 and 10
