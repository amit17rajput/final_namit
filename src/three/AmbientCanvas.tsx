import SceneCanvas from "./SceneCanvas";
import AmbientScene from "./AmbientScene";

export default function AmbientCanvas() {
  return (
    <SceneCanvas cameraPosition={[0, 0, 5]} fallback={<div className="h-full w-full" aria-hidden="true" />}>
      <AmbientScene />
    </SceneCanvas>
  );
}
