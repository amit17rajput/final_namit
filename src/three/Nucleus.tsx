import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

const PARTICLE_COUNT = 9;

export default function Nucleus() {
  const groupRef = useRef<Group>(null);

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const theta = (i / PARTICLE_COUNT) * Math.PI * 2 + i * 0.7;
      const phi = Math.acos(1 - 2 * ((i + 0.5) / PARTICLE_COUNT));
      const r = 0.42 + (i % 3) * 0.06;
      return {
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ] as [number, number, number],
        scale: 0.26 + (i % 3) * 0.05,
        color: i % 2 === 0 ? "#55E6FF" : "#528BFF",
      };
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.03;
    groupRef.current.scale.setScalar(pulse);
  });

  return (
    <group ref={groupRef}>
      <pointLight color="#55E6FF" intensity={4} distance={3} />
      {particles.map((p, i) => (
        <mesh key={i} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshPhysicalMaterial
            color={p.color}
            roughness={0.25}
            metalness={0.6}
            clearcoat={0.8}
            emissive={p.color}
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}
