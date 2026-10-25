export default function StaticNetwork() {
  const nodes = [
    { x: 40, y: 60 }, { x: 40, y: 140 }, { x: 40, y: 220 },
    { x: 170, y: 40 }, { x: 170, y: 100 }, { x: 170, y: 160 }, { x: 170, y: 220 },
    { x: 300, y: 90 }, { x: 300, y: 190 },
  ];
  const edges: [number, number][] = [
    [0, 3], [0, 4], [1, 4], [1, 5], [2, 5], [2, 6],
    [3, 7], [4, 7], [5, 8], [6, 8],
  ];

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      role="img"
      aria-label="Abstract illustration of a layered neural network with connected nodes."
    >
      <svg viewBox="0 0 340 260" className="h-full w-full max-w-sm">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#7DAEFF"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="6" fill={i % 2 === 0 ? "#55E6FF" : "#9A7BFF"} />
        ))}
      </svg>
    </div>
  );
}
