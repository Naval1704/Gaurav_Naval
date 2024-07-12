import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Plane = ({ isMobile }) => {
  const plane = useGLTF("src/assets/3d/plane.glb");

  return (
    <primitive
      object={plane.scene}
      scale={isMobile ? 3 : 5}
      position={isMobile ? [3, -0.25, -1.5] : [8, -1.25, -1.5]}
      rotation-y={Math.PI}
    />
  );
};

const PlaneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [20, 3, 5], fov: 25 }}
      className="w-full h-screen bg-transparent"
      style={isMobile ? { height: "200px", width: "250px" } : { height: "300px", width: "1050px" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={1.15} penumbra={5} intensity={5} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={-1.5}
        />

        <Plane isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PlaneCanvas;
