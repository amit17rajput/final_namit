import SceneCanvas from "./SceneCanvas";
import TechConstellationScene from "./TechConstellationScene";
import StaticAtom from "../components/StaticAtom";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

export default function TechConstellationCanvas() {
  const { interactive } = useMotionPrefs();

  return (
    <SceneCanvas cameraPosition={[0, 0.3, 7]} fallback={<StaticAtom animate={false} />}>
      <TechConstellationScene interactive={interactive} />
    </SceneCanvas>
  );
}
