import React, { useEffect, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { extend } from "@react-three/fiber";
import { TransformControls } from "three-stdlib";
import CanvasGuard, { watchContextLoss } from "./CanvasGuard";
import computerFallback from "../../assets/computer-fallback.png";
extend({ OrbitControls, TransformControls });

const ComputersFallback = () => (
  <div className="w-full h-full flex items-center justify-center px-4">
    <img
      src={computerFallback}
      alt="Desktop computer setup"
      className="w-full max-w-[900px] h-auto object-contain mt-40 sm:mt-24"
    />
  </div>
);

const Computers = ({ isMobile, onReady }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={20} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <CanvasGuard fallback={<ComputersFallback />}>
      {({ ready, fail }) => (
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
          onCreated={(state) => watchContextLoss(state, fail)}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} onReady={ready} />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </CanvasGuard>
  );
};

export default ComputersCanvas;
