// e = number edges
// Time: O(e)
// Space: O(e)
const edges1 = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
const edges2 = [
  ["m", "n"],
  ["n", "o"],
  ["o", "p"],
  ["p", "q"],
  ["t", "o"],
  ["r", "q"],
  ["r", "s"],
];
const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
console.log(buildGraph(edges1));
console.log(buildGraph(edges2));

const shortestPath = (edges, source, dest) => {
  const graph = buildGraph(edges);
  const visited = new Set([source]);
  const queue = [[source, 0]];
  while (queue.length > 0) {
    const [current, distance] = queue.shift();

    if (current == dest) return distance;
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};
console.log("Shortest path: ", shortestPath(edges1, "w", "y"));
console.log("Shortest path: ", shortestPath(edges2, "m", "s"));
