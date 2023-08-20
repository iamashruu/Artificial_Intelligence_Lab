def tsp(graph):
    num_nodes = len(graph)
    visited = [False] * num_nodes
    # print(visited)
    visited[0] = True  # Starting node

    min_cost = float("inf")
    optimal_path = []

    def dfs(current_node, path, cost, count):
        nonlocal min_cost, optimal_path

        if count == num_nodes and graph[current_node][0] != 0:
            # All nodes visited and there is an edge to the starting node
            cost += graph[current_node][0]
            if cost < min_cost:
                min_cost = cost
                optimal_path = path[:]  # Make a copy of the path
                optimal_path.append(1)  # Add the starting node to complete the path
            return

        for next_node in range(num_nodes):
            if not visited[next_node] and graph[current_node][next_node] != 0:
                visited[next_node] = True
                path.append(next_node + 1)  # Add the node to the path (1-based index)
                dfs(next_node, path, cost + graph[current_node][next_node], count + 1)
                path.pop()  # Remove the node from the path
                visited[next_node] = False

    dfs(0, [1], 0, 1)  # Start with node 1, cost 0, and count 1

    return min_cost, optimal_path


# Test the tsp function with the provided graph
graph = [
    [0, 10, 15, 20],
    [5, 0, 25, 10],
    [15, 30, 0, 5],
    [15, 10, 20, 0],
]

result = tsp(graph)
print("Minimum cost:", result[0])
print("Optimal path:", " -> ".join(map(str, result[1])))
