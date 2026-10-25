import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import type { Group } from "three";

interface OrbitLabelProps {
  radius: number;
  ellipseRatio: number;
  tilt: [number, number, number];
  speed: number;
  color: string;
  label: string;
}

export default function OrbitLabel({ radius, ellipseRatio, tilt, speed, color, label }: OrbitLabelProps) {
  const spinRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!spinRef.current) return;
    spinRef.current.rotation.y += delta * speed;
  });

  const segments = 96;
  const points: [number, number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    points.push([Math.cos(a) * radius, 0, Math.sin(a) * radius * ellipseRatio]);
  }

  return (
    <group rotation={tilt}>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array(points.flat()), 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </line>
      <group scale={[1, 1, ellipseRatio]}>
        <group ref={spinRef}>
          <mesh position={[radius, 0, 0]} scale={[1, 1, 1 / ellipseRatio]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} />
            <Html center distanceFactor={8} className="pointer-events-none select-none">
              <span
                className="whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide backdrop-blur-sm"
                style={{ borderColor: `${color}66`, color, background: "rgba(13,21,37,0.7)" }}
              >
                {label}
              </span>
            </Html>
          </mesh>
        </group>
      </group>
    </group>
  );
}
