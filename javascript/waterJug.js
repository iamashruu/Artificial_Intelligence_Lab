// const a = parseInt(prompt("Enter Jug A Capacity: "));
// const b = parseInt(prompt("Enter Jug B Capacity: "));
// let ai = parseInt(prompt("Initially Water in Jug A: "));
// let bi = parseInt(prompt("Initially Water in Jug B: "));
// const af = parseInt(prompt("Final State of Jug A: "));
// const bf = parseInt(prompt("Final State of Jug B: "));
// let count = 0;
// console.log(
//   "Operations:\n 1.Fill A\n 2.Fill B\n 3.Empty A\n 4.Empty B\n 5.Pour A=>B\n 6.Pour B=>A"
// );
// while (ai !== af || bi !== bf) {
//   const op = parseInt(prompt("Enter the Operation: "));
//   count++;
//   if (op === 1) ai = a;
//   else if (op === 2) bi = b;
//   else if (op === 3) ai = 0;
//   else if (op === 4) bi = 0;
//   else if (op === 5)
//     [ai, bi] = [ai - Math.min(ai, b - bi), bi + Math.min(ai, b - bi)];
//   else if (op === 6)
//     [bi, ai] = [bi - Math.min(bi, a - ai), ai + Math.min(bi, a - ai)];
//   else console.log("Invalid operation. Please enter a valid operation number.");

//   console.log(`Jug A: ${ai}, Jug B: ${bi}`);
// }

// console.log(`You have tried ${count} times to reach the goal`);
// console.log("Desired state reached!");

const jugACapacity = parseInt(prompt("Enter Jug A Capacity: "));
const jugBCapacity = parseInt(prompt("Enter Jug B Capacity: "));
let jugAWater = parseInt(prompt("Initially Water in Jug A: "));
let jugBWater = parseInt(prompt("Initially Water in Jug B: "));
const jugAFinal = parseInt(prompt("Final State of Jug A: "));
const jugBFinal = parseInt(prompt("Final State of Jug B: "));
console.log(`Enter Jug A Capacity: ${jugACapacity}`);
console.log(`Enter Jug B Capacity: ${jugBCapacity} `);
console.log(`Initially Water in Jug A: ${jugAWater} `);
console.log(`Initially Water in Jug B: ${jugBWater}`);
console.log(`Final State of Jug A: ${jugAFinal} `);
console.log(`Final State of Jug B: ${jugBFinal} `);
let count = 0;
console.log(
  "Operations:\n 1. Fill A\n 2. Fill B\n 3. Empty A\n 4. Empty B\n 5. Pour A => B\n 6. Pour B => A"
);
while (jugAWater !== jugAFinal || jugBWater !== jugBFinal) {
  const operation = parseInt(prompt("Enter the Operation: "));
  count++;
  if (operation === 1) jugAWater = jugACapacity;
  else if (operation === 2) jugBWater = jugBCapacity;
  else if (operation === 3) jugAWater = 0;
  else if (operation === 4) jugBWater = 0;
  else if (operation === 5)
    [jugAWater, jugBWater] = [
      jugAWater - Math.min(jugAWater, jugBCapacity - jugBWater),
      jugBWater + Math.min(jugAWater, jugBCapacity - jugBWater),
    ];
  else if (operation === 6)
    [jugBWater, jugAWater] = [
      jugBWater - Math.min(jugBWater, jugACapacity - jugAWater),
      jugAWater + Math.min(jugBWater, jugACapacity - jugAWater),
    ];
  else console.log("Invalid operation. Please enter a valid operation number.");
  console.log(
    `Jug A: ${jugAWater}, Jug B: ${jugBWater}, Operation: ${operation}`
  );
}

console.log("Desired state reached!");
console.log(`You have tried ${count} times to reach the goal`);
