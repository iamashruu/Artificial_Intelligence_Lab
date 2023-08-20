class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function breadFirstTraversal(root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.value);
    queue.push(...node.children);
  }
  return result;
}

function buildTree() {
  const root = new Node(prompt("Enter the root node value:"));
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    const numChildren = +prompt(`Enter the number of children for node ${node.value} (or 0 if it has no children):`)

    for (let i = 1; i <= numChildren; i++) {
      const childNode = new Node(prompt(`Enter the value for child ${i} of node ${node.value}:`));
      node.children.push(childNode);
      queue.push(childNode);
    }
  }
  return root;
}

console.log(`The result of BFS Search for given tree is : ${breadFirstTraversal(buildTree())}`);
