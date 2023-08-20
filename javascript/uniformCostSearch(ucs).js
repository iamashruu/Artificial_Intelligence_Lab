// Function to perform Uniform Cost Search in a tree
function uniformCostSearch(tree, goalNode) {
  // Priority queue to keep track of nodes and their cumulative costs
  const priorityQueue = new PriorityQueue();

  // Initialize the priority queue with the root node and its cost (0)
  priorityQueue.enqueue({ node: tree, path: [], cost: 0 });

  while (!priorityQueue.isEmpty()) {
    const { node, path, cost } = priorityQueue.dequeue();

    if (node.value === goalNode) {
      // Goal node found, return the cumulative cost and path
      return { cost, path: path.concat(node.value) };
    }

    const children = node.children;
    for (const child of children) {
      const costToChild = child.cost;
      const totalCost = cost + costToChild;
      priorityQueue.enqueue({
        node: child,
        path: path.concat(node.value),
        cost: totalCost,
      });
    }
  }

  return null; // Goal not reachable
}

// Priority Queue implementation for UCS
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
    this.elements.sort((a, b) => a.cost - b.cost);
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

// Example tree representation for testing
const tree = {
  value: "A",
  cost: 0,
  children: [
    {
      value: "B",
      cost: 3,
      children: [
        {
          value: "D",
          cost: 6,
          children: [],
        },
      ],
    },
    {
      value: "C",
      cost: 5,
      children: [
        {
          value: "E",
          cost: 2,
          children: [],
        },
        {
          value: "F",
          cost: 4,
          children: [],
        },
      ],
    },
  ],
};

// Test the algorithm
const goalNode = "D";
const result = uniformCostSearch(tree, goalNode);

if (result !== null) {
  console.log("Shortest Path:", result.path.join(" -> "));
  console.log("Total Cost:", result.cost);
} else {
  console.log("Goal not reachable.");
}
