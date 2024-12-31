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

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
f.left = x;
f.right = y;
g.right = z;

//      a
//    /    \
//   b       c
//  / \    /  \
// d  e   f    g
//      /  \    \
//     x    y    z

//Recursive
const depthFirstValueRecursive = (root, s = []) => {
  if (root != null) {
    s.push(root.data);
    depthFirstValueRecursive(root.left, s);
    depthFirstValueRecursive(root.right, s);
  }
  return s;
};
console.log("By recursion :", depthFirstValueRecursive(a));

// Iterative
const depthFirstValue = (root) => {
  if (root == null) return [];
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.data);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};

console.log("By dfs :", depthFirstValue(a));
