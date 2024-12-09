import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";

const Scene = () => {
  const props = {
    focus: 3,
    speed: 10,
    aperture: 5.6,
    fov: 200,
    curl: 0.2,
  };

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ fov: 20, position: [0, 0, 2] }}>
        <Particles {...props} />
      </Canvas>
    </div>
  );
};

export default Scene;
