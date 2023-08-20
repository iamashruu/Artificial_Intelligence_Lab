// class Node {
//     constructor(val) {
//         this.val = val;
//         this.children = [];
//     }
// }

// function breadFirstTraversal(root) {
//     const queue = [root];
//     const result = [];

//     while (queue.length > 0) {
//         const node = queue.shift();
//         result.push(node.val);

//         for (const child of node.children) {
//             queue.push(child);
//         }
//     }

//     return result;
// }

// const root = new Node(1);
// root.children.push(new Node(2));
// root.children.push(new Node(3));
// root.children[0].children.push(new Node(4));
// root.children[0].children.push(new Node(5));
// root.children[1].children.push(new Node(6));
// root.children[1].children.push(new Node(7));
// const result = breadFirstTraversal(root);

// function buildTree() {
//     const rootValue = parseInt(prompt("Enter the root node value:"));
//     const root = new Node(rootValue);
//     const queue = [root];

//     while (queue.length > 0) {
//         const node = queue.shift();
//         const numChildren = parseInt(prompt(`Enter the number of children for node ${node.value}:`));

//         for (let i = 1; i <= numChildren; i++){
//             const childValue = parseInt(prompt(`Enter the value for child ${i} of node ${node.value}:`));
//             const childNode = new Node(childValue);
//             node.children.push(childNode);
//             queue.push(childNode);
//         }
//     }

//     return root;
// }

// const root = buildTree();
// const result = breadFirstTraversal(root);

// console.log(result);


class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function bfs(root) {
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);

    for (const child of node.children) {
      queue.push(child);
    }
  }

  return result;
}

function buildTree() {
  const rootValue = prompt("Enter the root node value:");
  const root = new Node(rootValue);
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    
    const numChildren = parseInt(
      prompt(
        `Enter the number of children for node ${node.value} (or 0 if it has no children):`
      )
    );

    for (let i = 1; i <= numChildren; i++) {
      const childValue = prompt(`Enter the value for child ${i} of node ${node.value}:`);
      const childNode = new Node(childValue);
      node.children.push(childNode);
      queue.push(childNode);
    }
  }

  return root;
}

const root = buildTree();
const result = bfs(root);
console.log(result);
