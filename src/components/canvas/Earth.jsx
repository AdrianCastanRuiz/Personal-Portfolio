import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import CanvasGuard, { watchContextLoss } from "./CanvasGuard";
import earthFallback from "../../assets/earth-fallback.png";

const EarthFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img
      src={earthFallback}
      alt="Planet"
      className="max-w-full max-h-full object-contain"
    />
  </div>
);

const Earth = ({ onReady }) => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <CanvasGuard fallback={<EarthFallback />}>
      {({ ready, fail }) => (
        <Canvas
          shadows
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
          onCreated={(state) => watchContextLoss(state, fail)}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth onReady={ready} />
          </Suspense>
        </Canvas>
      )}
    </CanvasGuard>
  );
};

export default EarthCanvas;
