import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  const canvasRef = useRef(null);

  const handleContextLost = (event) => {
    // Handle context lost event
    console.warn("WebGL context lost:", event);
    // Optionally, you can reload resources or inform the user
  };

  const handleContextRestored = () => {
    // Handle context restored event
    console.log("WebGL context restored.");
    // Reload resources or reset state as needed
  };

  return (
    <Canvas
      ref={canvasRef}
      onContextLost={handleContextLost}
      onContextRestored={handleContextRestored}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
