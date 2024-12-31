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

const undirectedTraversalDfs = (graph, source, visited) => {
  if (visited.has(source)) return false;
  visited.add(source);
  console.log(source);
  for (let neighbor of graph[source]) {
    undirectedTraversalDfs(graph, neighbor, visited);
  }
  return false;
};
const graph1 = buildGraph(edges);
undirectedTraversalDfs(graph1, "j", new Set());
