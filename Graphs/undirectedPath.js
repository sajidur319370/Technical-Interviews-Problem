// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(e)
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];
//    i-----k------m
//     \    \
//      j    l
//
//      o----n

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const hasPathDfs = (graph, source, dest, visited) => {
  if (source == dest) return true;
  if (visited.has(source)) return false;
  visited.add(source);
  for (let neighbor of graph[source]) {
    if (hasPathDfs(graph, neighbor, dest, visited)) return true;
  }
  return false;
};

const undirectedPathDfs = (edges, source, dest) => {
  const graph = buildGraph(edges);
  return hasPathDfs(graph, source, dest, new Set());
};

console.log(undirectedPathDfs(edges, "i", "m")); // -> true
console.log(undirectedPathDfs(edges, "i", "o")); // -> false
console.log(undirectedPathDfs(edges, "o", "n")); // ->true
