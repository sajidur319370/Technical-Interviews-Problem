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

const printBinaryTree = (root) => {
  if (root != null) {
    console.log("data ========================= ", root.data);
    printBinaryTree(root.left);
    printBinaryTree(root.right);
  }
  return;
};
printBinaryTree(a);
