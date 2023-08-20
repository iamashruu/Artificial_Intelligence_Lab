class NQueensSolver:
    def __init__(self, n):
        self.n = n
        self.board = [["." for _ in range(n)] for _ in range(n)]
        self.solutions = []

    def solve(self):
        self.backtrack(0)
        return self.solutions

    def is_safe(self, row, col):
        # Check if there is a queen in the same column
        for i in range(row):
            if self.board[i][col] == "Q":
                return False

        # Check upper left diagonal
        i, j = row, col
        while i >= 0 and j >= 0:
            if self.board[i][j] == "Q":
                return False
            i -= 1
            j -= 1

        # Check upper right diagonal
        i, j = row, col
        while i >= 0 and j < self.n:
            if self.board[i][j] == "Q":
                return False
            i -= 1
            j += 1

        return True

    def backtrack(self, row):
        if row == self.n:
            solution = ["".join(row) for row in self.board]
            self.solutions.append(solution)
            return

        for col in range(self.n):
            if self.is_safe(row, col):
                self.board[row][col] = "Q"
                self.backtrack(row + 1)
                self.board[row][col] = "."


# n = 4
n = int(input("Enter the value of n:"))
solver = NQueensSolver(n)
solutions = solver.solve()
for index, solution in enumerate(solutions):
    print(f"Solution {index + 1}:")
    for row in solution:
        print(row)
    print()

print(f"Found {len(solutions)} solutions for {n}-queens problem:")
