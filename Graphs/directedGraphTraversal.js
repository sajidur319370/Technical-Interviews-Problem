// n = number of nodes
// e = number edges
// Time: O(n)
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

console.log("=======================DFS==========================");
// Dfs Traversal
const dfsTraversal = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    dfsTraversal(graph, neighbor);
  }
};
dfsTraversal(graph1, "f");
console.log("------------------");
dfsTraversal(graph2, "a");

console.log("=======================BFS==========================");
// Bfs Traversal
const BfsTraversal = (graph, source) => {
  const queue = [source];

  while (queue.length) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};
BfsTraversal(graph1, "f");
console.log("------------------");
BfsTraversal(graph2, "a");
