import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import Nucleus from "./Nucleus";
import ElectronOrbit from "./ElectronOrbit";
import ParticleField from "./ParticleField";

const ORBITS = [
  { radius: 1.9, ellipseRatio: 0.42, tilt: [0.3, 0, 0.1] as [number, number, number], speed: 0.5, color: "#55E6FF" },
  { radius: 2.3, ellipseRatio: 0.5, tilt: [1.1, 0.4, 0] as [number, number, number], speed: 0.38, color: "#528BFF" },
  { radius: 2.7, ellipseRatio: 0.46, tilt: [0.5, -0.9, 0.3] as [number, number, number], speed: 0.44, color: "#9A7BFF" },
];

interface AtomSceneProps {
  interactive: boolean;
}

export default function AtomScene({ interactive }: AtomSceneProps) {
  const atomRef = useRef<Group>(null);
  const rotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!atomRef.current) return;
    const targetX = interactive ? state.pointer.y * 0.25 : 0;
    const targetY = interactive ? state.pointer.x * 0.4 : 0;

    rotation.current.x += (targetX - rotation.current.x) * 0.05;
    rotation.current.y += (targetY - rotation.current.y) * 0.05;

    atomRef.current.rotation.x = rotation.current.x;
    atomRef.current.rotation.y = rotation.current.y + state.clock.elapsedTime * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.4} color="#528BFF" />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#F4F7FF" />
      <ParticleField count={350} radius={6} speed={0.008} />
      <group ref={atomRef}>
        <Nucleus />
        {ORBITS.map((o, i) => (
          <ElectronOrbit key={i} {...o} />
        ))}
      </group>
    </>
  );
}
