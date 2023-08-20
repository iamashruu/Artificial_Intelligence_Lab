class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function dfs(node,values=[]) {
  node.children.forEach((child) => {
    values = values.concat(dfs(child));
  });
  return values.concat(node.value);
}


function buildTree() {
  const root = new Node(prompt("Enter the root node value:"));
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    const numChildren = +prompt(`Enter the number of children for node ${node.value} or (0: No children):`);

    for (let i = 1; i <= numChildren; i++) {
      const childNode = new Node(prompt(`Enter the value for child ${i} of node ${node.value}:`));
      node.children.push(childNode);
      queue.push(childNode);
    }
  }
  return root;
}

const root = buildTree();
console.log(`The result of DFS Search for the given tree is: ${dfs(root)}`);
