import { ReactNode, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

interface SceneCanvasProps {
  children: ReactNode;
  fallback: ReactNode;
  cameraPosition?: [number, number, number];
  fov?: number;
}

export default function SceneCanvas({
  children,
  fallback,
  cameraPosition = [0, 0.3, 6],
  fov = 42,
}: SceneCanvasProps) {
  const { showScene, lowPower } = useMotionPrefs();

  if (!showScene) return <>{fallback}</>;

  return (
    <Canvas
      camera={{ position: cameraPosition, fov }}
      dpr={lowPower ? [1, 1.25] : [1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
