class NQueensSolver {
  constructor(n) {
    this.n = n;
    this.board = [];
    for (let i = 0; i < n; i++) {
      this.board[i] = [];
      for (let j = 0; j < n; j++) {
        this.board[i][j] = ".";
      }
    }
    this.solutions = [];
  }

  solve() {
    this.backtrack(0);
    return this.solutions;
  }

  isSafe(row, col) {
    // Check if there is a queen in the same column
    for (let i = 0; i < row; i++) {
      if (this.board[i][col] === "Q") {
        return false;
      }
    }

    // Check upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (this.board[i][j] === "Q") {
        return false;
      }
    }

    // Check upper right diagonal
    for (let i = row, j = col; i >= 0 && j < this.n; i--, j++) {
      if (this.board[i][j] === "Q") {
        return false;
      }
    }

    return true;
  }

  backtrack(row) {
    if (row === this.n) {
      const solution = [];
      for (let i = 0; i < this.n; i++) {
        solution.push(this.board[i].join(""));
      }
      this.solutions.push(solution);
      return;
    }

    for (let col = 0; col < this.n; col++) {
      if (this.isSafe(row, col)) {
        this.board[row][col] = "Q";
        this.backtrack(row + 1);
        this.board[row][col] = ".";
      }
    }
  }
}

// const n = 4;
const n = +prompt("Enter the value of n:");
const solver = new NQueensSolver(n);
const solutions = solver.solve();
console.log(`Found ${solutions.length} solutions for ${n}-queens problem:`);
solutions.forEach((solution, index) => {
  console.log(`Solution ${index + 1}:`);
  solution.forEach((row) => {
    console.log(row);
  });
  console.log();
});
