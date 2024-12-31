// n = length of array a, m = length of array b
// Time: O(n+m)
// Space: O(n)

const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
console.log(intersection([4, 2, 1], [1, 2, 4, 6])); // -> [1,2,4]
console.log(intersection([0, 1, 2], [10, 11])); // -> []
