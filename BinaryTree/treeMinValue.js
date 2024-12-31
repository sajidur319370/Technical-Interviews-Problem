// n = number of nodes
// Time: O(n)
// Space: O(n)
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3
const treeMinValueBfs = (root) => {
  let smallest = Infinity;
  if (root == null) return smallest;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.data < smallest) smallest = current.data;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return smallest;
};
console.log("Smallest Bfs is: ", treeMinValueBfs(a));

const treeMinValueDfs = (root) => {
  let smallest = Infinity;
  if (root != null) {
    if (root.data < smallest) smallest = root.data;
    depthFirstValueRecursive(root.left);
    depthFirstValueRecursive(root.right);
  }
  return smallest;
};
console.log("Smallest  Dfs is: ", treeMinValueBfs(a));
