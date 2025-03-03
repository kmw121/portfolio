import * as Three from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
export default function TestThree() {
  const { size, gl, scene, camera } = useThree();

  const boxRef = useRef<Three.Mesh>(null);

  useFrame((state, delta) => {
    console.log(state);
    console.log(size);
    console.log(gl);
    console.log(camera);
    console.log(boxRef.current?.rotation.x);
    if (boxRef.current !== undefined && boxRef.current !== null) {
      boxRef.current.rotation.x -= delta;
    }

    scene.position.x -= 0.01;
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
        position={[2, 0, 0]}
        scale={[6, 1, 1]}
      >
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color="blue"></meshStandardMaterial>
      </mesh>
    </>
  );
}
