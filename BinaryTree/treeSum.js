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

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   2     1

const treeSumDfs = (root) => {
  if (root == null) return 0;
  return root.data + treeSumDfs(root.right) + treeSumDfs(root.left);
};

console.log(treeSumDfs(a));

const treeSumBfs = (root) => {
  let result = 0;
  if (root == null) return 0;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    result += current.data;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
};

console.log(treeSumBfs(a));
