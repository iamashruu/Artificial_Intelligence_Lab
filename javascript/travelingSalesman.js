function TravellingSalesman(graph) {
  const numNodes = graph.length;
  const visited = Array(numNodes).fill(false);
  visited[0] = true; // Starting node
  let minCost = Infinity;
  let optimalPath = [];

  function Traverse(currentNode, path, cost, count) {
    if (count === numNodes && graph[currentNode][0] !== 0) {
      // All nodes visited and there is an edge to the starting node
      cost += graph[currentNode][0];
      if (cost < minCost) {
        minCost = cost;
        optimalPath = path.slice();
        optimalPath.push(1); // Add the starting node to complete the path
      }
      return;
    }

    for (let nextNode = 0; nextNode < numNodes; nextNode++) {
      if (!visited[nextNode] && graph[currentNode][nextNode] !== 0) {
        visited[nextNode] = true;
        path.push(nextNode + 1); // Add the node to the path (1-based index)
        Traverse(
          nextNode,
          path,
          cost + graph[currentNode][nextNode],
          count + 1
        );
        path.pop(); // Remove the node from the path
        visited[nextNode] = false;
      }
    }
  }

  Traverse(0, [1], 0, 1); // Start with node 1, cost 0, and count 1

  return { minCost, optimalPath };
}

const graph = [
  [0, 10, 15, 20],
  [5, 0, 25, 10],
  [15, 30, 0, 5],
  [15, 10, 20, 0],
];

const result = TravellingSalesman(graph);
console.log("Minimum cost:", result.minCost);
console.log("Optimal path:", result.optimalPath.join(" -> "));
