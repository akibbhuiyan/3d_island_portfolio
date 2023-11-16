import { useGLTF } from "@react-three/drei";
import SkyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const skyRef = useRef();
  const sky = useGLTF(SkyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh>
      <primitive object={sky.scene} ref={skyRef} />
    </mesh>
  );
};

export default Sky;
