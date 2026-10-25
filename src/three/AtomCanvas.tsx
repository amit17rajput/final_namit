import SceneCanvas from "./SceneCanvas";
import AtomScene from "./AtomScene";
import StaticAtom from "../components/StaticAtom";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

export default function AtomCanvas() {
  const { interactive } = useMotionPrefs();

  return (
    <SceneCanvas cameraPosition={[0, 0.4, 6.5]} fallback={<StaticAtom animate={false} />}>
      <AtomScene interactive={interactive} />
    </SceneCanvas>
  );
}
