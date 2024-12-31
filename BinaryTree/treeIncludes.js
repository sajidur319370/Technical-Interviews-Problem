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

// Iterative
const treeIncludesBfs = (root, target) => {
  if (root == null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.data == target) return true;
    if (current.left) queue.push(current.left, target);
    if (current.right) queue.push(current.right, target);
  }
  return false;
};
const target = "d";
console.log(target, "is found :", treeIncludesBfs(a, target));

//Recursive
const treeIncludesDfs = (root, target) => {
  if (root) {
    if (root.data == target) return true;
    return (
      treeIncludesDfs(root.left, target) || treeIncludesDfs(root.right, target)
    );
  }
  return false;
};
const target1 = "r";
console.log(target1, "is found :", treeIncludesDfs(a, target1));
