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
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

const maxPathSum = (root) => {
  if (root == null) return -Infinity;
  if (root.left == null && root.right == null) return root.data;
  return Math.max(
    maxPathSum(root.left) + root.data,
    maxPathSum(root.right) + root.data
  );
};
console.log(maxPathSum(a));
