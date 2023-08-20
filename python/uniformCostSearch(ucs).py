# Priority Queue implementation for UCS
class PriorityQueue:
    def __init__(self):
        self.elements = []

    def enqueue(self, element):
        self.elements.append(element)
        self.elements.sort(key=lambda x: x["cost"])

    def dequeue(self):
        return self.elements.pop(0)

    def is_empty(self):
        return len(self.elements) == 0


# Function to perform Uniform Cost Search in a tree
def uniform_cost_search(tree, goal_node):
    # Priority queue to keep track of nodes and their cumulative costs
    priority_queue = PriorityQueue()

    # Initialize the priority queue with the root node and its cost (0)
    priority_queue.enqueue({"node": tree, "path": [], "cost": 0})

    while not priority_queue.is_empty():
        current = priority_queue.dequeue()
        node, path, cost = current["node"], current["path"], current["cost"]

        if node["value"] == goal_node:
            # Goal node found, return the cumulative cost and path
            return {"cost": cost, "path": path + [node["value"]]}

        for child in node["children"]:
            cost_to_child = child["cost"]
            total_cost = cost + cost_to_child
            priority_queue.enqueue(
                {
                    "node": child,
                    "path": path + [node["value"]],
                    "cost": total_cost,
                }
            )

    return None  # Goal not reachable


# Example tree representation for testing
tree = {
    "value": "A",
    "cost": 0,
    "children": [
        {
            "value": "B",
            "cost": 3,
            "children": [
                {
                    "value": "D",
                    "cost": 6,
                    "children": [],
                },
            ],
        },
        {
            "value": "C",
            "cost": 5,
            "children": [
                {
                    "value": "E",
                    "cost": 2,
                    "children": [],
                },
                {
                    "value": "F",
                    "cost": 4,
                    "children": [],
                },
            ],
        },
    ],
}

# Test the algorithm
goal_node = "D"
result = uniform_cost_search(tree, goal_node)

if result is not None:
    print("Shortest Path:", " -> ".join(result["path"]))
    print("Total Cost:", result["cost"])
else:
    print("Goal not reachable.")
