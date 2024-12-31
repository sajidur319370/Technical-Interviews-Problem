// n = length of string
// Time: O(n)
// Space: O(n)
const mostFrequentChar = (s) => {
  const count = {};

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  let best = null;
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }
  return best;
};
console.log(mostFrequentChar("bookeeper")); // -> 'e'
console.log(mostFrequentChar("david")); // -> 'd'
console.log(mostFrequentChar("mississippi")); // -> 'i'
