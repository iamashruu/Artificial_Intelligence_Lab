class Node:
    def __init__(self, value):
        self.value = value
        self.children = []

def post_order_traversal(node):
    if node is None:
        return

    for child in node.children:
        post_order_traversal(child)

    print(node.value, end=" ")  # Print the value of the node after visiting its children

def build_tree():
    root_value = input("Enter the root node value: ")
    root = Node(root_value)
    queue = [root]

    while queue:
        node = queue.pop(0)

        num_children = int(input(f"Enter the number of children for node {node.value} (or 0 if it has no children): "))

        for i in range(num_children):
            child_value = input(f"Enter the value for child {i+1} of node {node.value}: ")
            child_node = Node(child_value)
            node.children.append(child_node)
            queue.append(child_node)

    return root

root = build_tree()
post_order_traversal(root)
