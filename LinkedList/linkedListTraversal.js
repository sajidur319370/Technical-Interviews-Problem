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

const linkedListPrint = (head) => {
  if (head == null) return;
  console.log(head.value);
  linkedListPrint(head.next);
};

linkedListPrint(a);
