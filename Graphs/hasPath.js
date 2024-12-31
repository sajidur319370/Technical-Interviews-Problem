// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)
const graph1 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

//    f---*i----*k
//     \  /*\
//     *g*  j
//      \
//      *h
//

const graph2 = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: ["g"],
  g: [],
};

//    a--------*b
//     \         \
//     *c        *d
//      \          \
//      *e         *f----*g
//

console.log("=======================DFS==========================");
// Dfs Traversal
const hasPathDfs = (graph, source, dest) => {
  if (source == dest) return true;
  for (let neighbor of graph[source]) {
    if (hasPathDfs(graph, neighbor, dest)) return true;
  }
  return false;
};
console.log("Has path: ", hasPathDfs(graph1, "f", "h"));
console.log("Has path: ", hasPathDfs(graph1, "i", "j"));
console.log("Has path: ", hasPathDfs(graph1, "j", "i"));
console.log("Has path: ", hasPathDfs(graph2, "a", "e"));

console.log("=======================BFS==========================");
// Bfs Traversal
const hasPathBfs = (graph, source, dest) => {
  const queue = [source];
  while (queue.length) {
    const current = queue.shift();
    if (current == dest) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};
console.log("Has path: ", hasPathBfs(graph1, "f", "h"));
console.log("Has path: ", hasPathBfs(graph1, "i", "j"));
console.log("Has path: ", hasPathBfs(graph1, "j", "i"));
console.log("Has path: ", hasPathBfs(graph2, "a", "e"));
