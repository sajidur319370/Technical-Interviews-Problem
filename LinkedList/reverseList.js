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

// Reverse the Linked List
const reverseList = (head, prev = null) => {
  if (head == null) return prev;
  const next = head.next;
  head.next = prev;
  prev = head;
  return reverseList(next, prev);
};

// Traverse the linked List recursively
const linkedListValuesRecursive = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};
const fillValues = (head, values) => {
  if (head == null) return;
  values.push(head.value);
  fillValues(head.next, values);
};
console.log("Original List: ", linkedListValuesRecursive(a));
console.log("Reverse List: ", linkedListValuesRecursive(reverseList(a)));
