// n = length of string 1
// m = length of string 2
// Time: O(n + m)
// Space: O(n + m)
const anagrams = (s1, s2) => {
  const count = {};
  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  for (let char of s2) {
    if (count[char] === undefined) {
      return false;
    } else {
      count[char] -= 1;
    }
  }

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
};
console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("night", "thing")); // -> true
console.log(anagrams("taxi", "tax")); // -> false
console.log(anagrams("cats", "tocs")); // -> false
