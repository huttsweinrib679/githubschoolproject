// Random Node.js Code

const fs = require('fs');

fs.readFile('random.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const nums = data.toString().split(',').map((n) => parseInt(n));
  const sum = nums.reduce((a, b) => a + b);
  console.log(`Sum of the numbers is: ${sum}`);
});
