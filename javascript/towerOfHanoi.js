// function towerOfHanoi(n, source, auxiliary, target) {
//   if (n === 1) {
//     console.log(`Move disk 1 from ${source} to ${target}`);
//     return;
//   }

//   towerOfHanoi(n - 1, source, target, auxiliary);
//   console.log(`Move disk ${n} from ${source} to ${target}`);
//   towerOfHanoi(n - 1, auxiliary, source, target);
// }

// const numberOfDisks = 3; // Change this value to the desired number of disks
// towerOfHanoi(numberOfDisks, "A", "B", "C");

const towers = [[], [], []];

function initializeTowers(numDisks) {
  for (let i = numDisks; i > 0; i--) {
    towers[0].push(i);
  }
}

function displayTowers(source, target) {
  console.log(
    `${
      source === undefined
        ? ""
        : "Move: " + (source + 1) + " to " + (target + 1)
    }`
  );
  for (let i = 0; i < 3; i++) {
    console.log(`Tower ${i + 1}: ${towers[i].join(", ")}`);
  }
  console.log();
}

function moveDisk(sourceTower, targetTower) {
  const disk = towers[sourceTower].pop();
  towers[targetTower].push(disk);
  displayTowers(sourceTower, targetTower);
  checkWin();
}

function checkWin() {
  if (towers[0].length === 0 && towers[1].length === 0) {
    console.log("Congratulations! You've solved the Tower of Hanoi!");
  }
}

function promptMove() {
  const input = prompt("Enter source tower and target tower (e.g., 1 3):");
  const [source, target] = input.split(" ").map(Number);

  if (
    source >= 1 &&
    source <= 3 &&
    target >= 1 &&
    target <= 3 &&
    source !== target
  ) {
    if (towers[source - 1].length === 0) {
      console.log("Source tower is empty. Choose a different source.");
      promptMove();
    } else if (
      towers[target - 1].length === 0 ||
      towers[source - 1][towers[source - 1].length - 1] <
        towers[target - 1][towers[target - 1].length - 1]
    ) {
      moveDisk(source - 1, target - 1);
      promptMove();
    } else {
      console.log(
        "Invalid move. Larger disk cannot be placed on top of a smaller disk."
      );
      promptMove();
    }
  } else {
    console.log("Invalid input. Enter valid source and target towers.");
    promptMove();
  }
}

const numDisks = 3; // Change this value to the desired number of disks
initializeTowers(numDisks);
displayTowers();
promptMove();
