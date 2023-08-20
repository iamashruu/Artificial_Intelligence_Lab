let leftBank = ["M", "L", "G", "C"];
let rightBank = [];
let count = 0;
// console.log("Before Process");
// console.log("Elements in the Left Side Bank ", leftBank);
// console.log("Elements in the Right Side Bank ", rightBank);
console.log(leftBank[1], " ", leftBank[2], " ", leftBank[3], "Select any one");
while (true) {
  // console.log(
  //   leftBank[1],
  //   " ",
  //   leftBank[2],
  //   " ",
  //   leftBank[3],
  //   "Select any one"
  // );

  let item = prompt("Enter item:").toUpperCase();
  console.log(`Select: ${item}`);
  count++;

  if (leftBank[1] === item && leftBank[2] === "G" && leftBank[3] === "C") {
    console.log("Goat will eat cabbage.");
    break;
  }

  if (
    leftBank[2] === item &&
    leftBank.includes("C") &&
    leftBank.includes("L")
  ) {
    rightBank.push(item);
    delete leftBank[2];
    // console.log(rightBank, leftBank);
  }

  if (
    rightBank.includes("G") &&
    leftBank.includes("L") &&
    leftBank[3] === item
  ) {
    console.log("Goat will return to left bank");
    leftBank[2] = rightBank[0];
    rightBank[0] = item;
    delete leftBank[3];
    // console.log(rightBank, leftBank);
  }
  if (
    rightBank.includes("G") &&
    leftBank.includes("C") &&
    leftBank[1] === item
  ) {
    console.log("Goat will return to left bank");
    leftBank[2] = rightBank[0];
    rightBank[0] = item;
    delete leftBank[1];
    // console.log(rightBank, leftBank);
  }
  if (
    rightBank.includes("C") &&
    leftBank.includes("L") &&
    leftBank[2] === item
  ) {
    console.log("Cabbage will return to left bank");
    leftBank[3] = rightBank[0];
    rightBank[0] = item;
    delete leftBank[2];
    // console.log(rightBank, leftBank);
  }
  if (
    rightBank.includes("C") &&
    leftBank.includes("G") &&
    leftBank[1] === item
  ) {
    rightBank.push(item);
    delete leftBank[1];
    // console.log(rightBank, leftBank);
  }
  if (
    rightBank.includes("L") &&
    leftBank.includes("G") &&
    leftBank[3] === item
  ) {
    rightBank.push(item);
    delete leftBank[3];
    // console.log(rightBank, leftBank);
  }
  if (
    rightBank.includes("L") &&
    leftBank.includes("C") &&
    leftBank[2] === item
  ) {
    console.log("Lion will return to left bank");
    leftBank[1] = rightBank[0];
    rightBank[0] = leftBank[2];
    delete leftBank[2];
    // console.log(rightBank, leftBank);
  }
  if (leftBank[2] === item && leftBank[3] !== "C" && leftBank[1] !== "L") {
    rightBank.push(leftBank[2]);
    rightBank.push("M");
    leftBank[2] = "";
    leftBank = [];
    console.log("Goal is reached");
    break;
  }
  if (leftBank[3] === item) {
    console.log("Lion eats goat");
    break;
  }
}

console.log("After Process");
console.log(`You have tried ${count} times to reach the goal`);
console.log("Elements in the Left Side Bank ", leftBank);
console.log("Elements in the Right Side Bank ", rightBank);
