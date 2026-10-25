import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import ParticleField from "./ParticleField";

export default function AmbientScene() {
  const coreRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
    coreRef.current.scale.setScalar(pulse);
    coreRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <>
      <ambientLight intensity={0.5} color="#528BFF" />
      <pointLight position={[2, 2, 3]} intensity={2} color="#55E6FF" />
      <ParticleField count={450} radius={5} speed={0.01} />
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial color="#55E6FF" emissive="#55E6FF" emissiveIntensity={0.25} wireframe />
      </mesh>
    </>
  );
}
