import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import OrbitLabel from "./OrbitLabel";
import ParticleField from "./ParticleField";
import { technologyCategories } from "../data/technologies";

const COLORS = ["#55E6FF", "#528BFF", "#9A7BFF"];

interface TechConstellationSceneProps {
  interactive: boolean;
}

export default function TechConstellationScene({ interactive }: TechConstellationSceneProps) {
  const groupRef = useRef<Group>(null);
  const rotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = interactive ? state.pointer.y * 0.15 : 0;
    const targetY = interactive ? state.pointer.x * 0.3 : 0;
    rotation.current.x += (targetX - rotation.current.x) * 0.05;
    rotation.current.y += (targetY - rotation.current.y) * 0.05;
    groupRef.current.rotation.x = rotation.current.x;
    groupRef.current.rotation.y = rotation.current.y + state.clock.elapsedTime * 0.035;
  });

  return (
    <>
      <ambientLight intensity={0.5} color="#55E6FF" />
      <directionalLight position={[3, 4, 5]} intensity={1} color="#F4F7FF" />
      <ParticleField count={250} radius={6} speed={0.006} />
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#55E6FF" emissive="#55E6FF" emissiveIntensity={0.5} />
        </mesh>
        <pointLight color="#55E6FF" intensity={3} distance={3} />
        {technologyCategories.map((cat, i) => (
          <OrbitLabel
            key={cat.key}
            radius={1.6 + i * 0.42}
            ellipseRatio={0.4 + (i % 3) * 0.08}
            tilt={[0.3 + i * 0.18, i * 0.5, i % 2 === 0 ? 0.2 : -0.2]}
            speed={0.22 + (i % 3) * 0.08}
            color={COLORS[i % COLORS.length]}
            label={cat.label}
          />
        ))}
      </group>
    </>
  );
}
