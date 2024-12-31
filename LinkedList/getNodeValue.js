// n = number of nodes
// Time complexity = O(n)
// Space Complexity = O(n)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const getNodeValue = (head, n) => {
  if (head == null || n < 0) return "Index out of bound";
  if (n == 0) return head.value;
  return getNodeValue(head.next, n - 1);
};

console.log(getNodeValue(a, 4));
