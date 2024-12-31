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

a.next = b;
b.next = c;
c.next = d;

const linkedListFind = (head, val) => {
  if (head == null) return false;
  if (head.value == val) return true;
  return linkedListFind(head.next, val);
};

console.log(linkedListFind(a, "B"));
