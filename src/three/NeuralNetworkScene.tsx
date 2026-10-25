import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";
import ParticleField from "./ParticleField";

const LAYERS = [4, 6, 6, 3];
const LAYER_SPACING = 1.6;
const COLORS = ["#55E6FF", "#528BFF", "#9A7BFF"];

interface Node {
  position: [number, number, number];
  color: string;
  phase: number;
}

function buildNodes(): Node[] {
  const nodes: Node[] = [];
  LAYERS.forEach((count, li) => {
    const x = (li - (LAYERS.length - 1) / 2) * LAYER_SPACING;
    for (let i = 0; i < count; i++) {
      const y = (i - (count - 1) / 2) * 0.55;
      nodes.push({
        position: [x, y, (Math.random() - 0.5) * 0.4],
        color: COLORS[li % COLORS.length],
        phase: Math.random() * Math.PI * 2,
      });
    }
  });
  return nodes;
}

function buildEdges(nodes: Node[]): [Node, Node][] {
  const edges: [Node, Node][] = [];
  let offset = 0;
  for (let li = 0; li < LAYERS.length - 1; li++) {
    const a = LAYERS[li];
    const b = LAYERS[li + 1];
    for (let i = 0; i < a; i++) {
      for (let j = 0; j < b; j++) {
        edges.push([nodes[offset + i], nodes[offset + a + j]]);
      }
    }
    offset += a;
  }
  return edges;
}

interface NeuralNetworkSceneProps {
  interactive: boolean;
}

export default function NeuralNetworkScene({ interactive }: NeuralNetworkSceneProps) {
  const groupRef = useRef<Group>(null);
  const nodeRefs = useRef<Mesh[]>([]);
  const rotation = useRef({ x: 0, y: 0 });

  const nodes = useMemo(buildNodes, []);
  const edges = useMemo(() => buildEdges(nodes), [nodes]);

  const edgePositions = useMemo(() => {
    const arr = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      arr.set([...a.position, ...b.position], i * 6);
    });
    return arr;
  }, [edges]);

  useFrame((state) => {
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.6 + nodes[i].phase) * 0.18;
      mesh.scale.setScalar(scale);
    });

    if (!groupRef.current) return;
    const targetX = interactive ? state.pointer.y * 0.2 : 0;
    const targetY = interactive ? state.pointer.x * 0.35 : 0;
    rotation.current.x += (targetX - rotation.current.x) * 0.05;
    rotation.current.y += (targetY - rotation.current.y) * 0.05;
    groupRef.current.rotation.x = rotation.current.x;
    groupRef.current.rotation.y = rotation.current.y + state.clock.elapsedTime * 0.04;
  });

  return (
    <>
      <ambientLight intensity={0.5} color="#528BFF" />
      <directionalLight position={[2, 3, 4]} intensity={1} color="#F4F7FF" />
      <ParticleField count={200} radius={5} speed={0.006} />
      <group ref={groupRef}>
        <line>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#7DAEFF" transparent opacity={0.22} />
        </line>
        {nodes.map((n, i) => (
          <mesh
            key={i}
            position={n.position}
            ref={(el) => {
              if (el) nodeRefs.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={n.color} emissive={n.color} emissiveIntensity={0.6} />
          </mesh>
        ))}
      </group>
    </>
  );
}
