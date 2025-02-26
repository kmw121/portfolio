import * as Three from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function ThreeElement() {
  //   const { size, gl, scene, camera } = useThree();

  const boxRef = useRef<Three.Mesh>(null);

  useFrame((state, delta) => {
    console.log(boxRef.current?.rotation.x);
    if (boxRef.current !== undefined && boxRef.current !== null) {
      boxRef.current.rotation.x += delta;
    }
  });
  return (
    <>
      <directionalLight position={[5, 5, 5]}> </directionalLight>
      <mesh
        ref={boxRef}
        rotation={[
          Three.MathUtils.degToRad(45),
          Three.MathUtils.degToRad(45),
          0,
        ]}
      >
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color="red"></meshStandardMaterial>
      </mesh>
    </>
  );
}
