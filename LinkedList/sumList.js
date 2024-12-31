// n = number of nodes
// Time complexity = O(n)
// Space Complexity = O(n)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(4);
const b = new Node(6);
const c = new Node(7);
const d = new Node(2);

a.next = b;
b.next = c;
c.next = d;

const sumListValues = (head) => {
  let sum = 0;
  let current = head;
  while (current != null) {
    sum += current.value;
    current = current.next;
  }
  return sum;
};

console.log(sumListValues(a));
let sum = 0;
const sumListRecursive = (head) => {
  if (head == null) return 0;
  return head.value + sumListRecursive(head.next);
};

console.log(sumListRecursive(a));
