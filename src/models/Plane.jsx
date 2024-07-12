import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

export function Plane({ rotation, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    // Play animation based on rotation or other scroll-based logic if needed
    // actions["Take 001"].play(); // Uncomment if animation is needed

    // Clean up animation on component unmount
    return () => {
      actions["Take 001"].stop();
    };
  }, [actions, rotation]);

  return (
    <mesh {...props} ref={ref} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
}
