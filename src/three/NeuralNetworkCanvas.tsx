import SceneCanvas from "./SceneCanvas";
import NeuralNetworkScene from "./NeuralNetworkScene";
import StaticNetwork from "../components/StaticNetwork";
import { useMotionPrefs } from "../hooks/useMotionPrefs";

export default function NeuralNetworkCanvas() {
  const { interactive } = useMotionPrefs();

  return (
    <SceneCanvas cameraPosition={[0, 0, 6]} fallback={<StaticNetwork />}>
      <NeuralNetworkScene interactive={interactive} />
    </SceneCanvas>
  );
}
