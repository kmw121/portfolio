import * as Three from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
export default function ThreeElement() {
  const { size, gl, scene, camera } = useThree();

  const boxRef = useRef<Three.Mesh>(null);
  const groupRef = useRef<Three.Group>(null);

  useFrame((state, delta) => {
    console.log(state);
    console.log(boxRef.current?.rotation.x);
    if (boxRef.current !== undefined && boxRef.current !== null) {
      boxRef.current.rotation.x += delta;
    }
    //scene.position.x += 0.01;
    groupRef.current.rotation.x += delta;
  });
  return (
    <>
      <directionalLight position={[5, 5, 5]}> </directionalLight>
      <group
        ref={groupRef}
        position={[4, 0, 0]}
        rotation={[
          Three.MathUtils.degToRad(30),
          Three.MathUtils.degToRad(30),
          Three.MathUtils.degToRad(0),
        ]}
      >
        <mesh
          ref={boxRef}
          rotation={[
            Three.MathUtils.degToRad(45),
            Three.MathUtils.degToRad(45),
            0,
          ]}
          position={[2, 0, 0]}
          position-x={[2]}
          position-y={[3]}
          scale={[6, 1, 1]}
          rotation-z={[Three.MathUtils.degToRad(30)]}
        >
          <boxGeometry></boxGeometry>
          <meshStandardMaterial color="red"></meshStandardMaterial>
          <axesHelper args={[3]} />
        </mesh>

        <mesh
          rotation={[
            Three.MathUtils.degToRad(45),
            Three.MathUtils.degToRad(45),
            0,
          ]}
          position={[2, 0, 0]}
          position-x={[2]}
          position-y={[3]}
          scale={[6, 1, 1]}
          rotation-z={[Three.MathUtils.degToRad(30)]}
        >
          <boxGeometry></boxGeometry>
          <meshStandardMaterial color="blue"></meshStandardMaterial>
        </mesh>

        <mesh
          rotation={[
            Three.MathUtils.degToRad(45),
            Three.MathUtils.degToRad(45),
            0,
          ]}
          position={[2, 0, 0]}
          position-x={[1]}
          position-y={[3]}
          scale={[6, 1, 1]}
          rotation-z={[Three.MathUtils.degToRad(30)]}
        >
          <boxGeometry></boxGeometry>
          <meshStandardMaterial color="green"></meshStandardMaterial>
        </mesh>
      </group>
    </>
  );
}
