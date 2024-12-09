import {
  Decal,
  Float,
  Preload,
  PresentationControls,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "./Loader";

const Ball = (props: { imgUrl: string }) => {
  const [decal] = useTexture([props.imgUrl]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const textureLoader = new Image();
    textureLoader.src = props.imgUrl;
    textureLoader.onload = () => setIsLoaded(true);
    textureLoader.onerror = () =>
      console.error(`Failed to load texture: ${props.imgUrl}`);
  }, [props.imgUrl]);

  if (!isLoaded) return null;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshMatcapMaterial
          color="#faf8f8"
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Ball imgUrl={icon} />
        </PresentationControls>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
