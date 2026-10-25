import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

interface ElectronOrbitProps {
  radius: number;
  ellipseRatio: number;
  tilt: [number, number, number];
  speed: number;
  color?: string;
}

export default function ElectronOrbit({
  radius,
  ellipseRatio,
  tilt,
  speed,
  color = "#55E6FF",
}: ElectronOrbitProps) {
  const spinRef = useRef<Group>(null);

  const ringPoints = useMemo(() => {
    const segments = 96;
    const points: number[] = [];
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      points.push(Math.cos(a) * radius, 0, Math.sin(a) * radius * ellipseRatio);
    }
    return new Float32Array(points);
  }, [radius, ellipseRatio]);

  useFrame((_, delta) => {
    if (!spinRef.current) return;
    spinRef.current.rotation.y += delta * speed;
  });

  return (
    <group rotation={tilt}>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ringPoints, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </line>
      <group scale={[1, 1, ellipseRatio]}>
        <group ref={spinRef}>
          <mesh position={[radius, 0, 0]} scale={[1, 1, 1 / ellipseRatio]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
