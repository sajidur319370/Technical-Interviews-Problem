// n = length of list 1
// m = length of list 2
// Time complexity = O(min(m,n))
// Space Complexity = O(min(m,n))
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

const x = new Node("X");
const y = new Node("Y");
const z = new Node("Z");

x.next = y;
y.next = z;

const zipperListRecursive = (head1, head2) => {
  if (head1 == null && head2 == null) return null;
  if (head1 == null) return head2;
  if (head2 == null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;

  head1.next = head2;
  head2.next = zipperListRecursive(next1, next2);
  return head1;
};
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

console.log(
  "Zipper List:",
  linkedListValuesRecursive(zipperListRecursive(a, x))
);
