import * as Three from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
//import { useThree } from "@react-three/fiber";
import { Box, Sphere, Cone } from "@react-three/drei";
import { useControls } from "leva";
export default function ThreeElement() {
  // const { size, gl, scene, camera } = useThree();

  const boxRef = useRef<Three.Mesh>(null);
  const groupRef = useRef<Three.Group>(null);
  const wireRef = useRef<Three.Mesh>(null);
  const wireCopyRef = useRef<Three.Mesh>(null);
  const boxControl = useControls({
    width: { value: 1, min: 0.1, max: 10, step: 0.1 },
    height: { value: 1, min: 0.1, max: 10, step: 0.1 },
    depth: { value: 1, min: 0.1, max: 10, step: 0.1 },
    widthSeg: { value: 1, min: 1, max: 10, step: 1 },
    heightSeg: { value: 1, min: 1, max: 10, step: 1 },
    depthSeg: { value: 1, min: 1, max: 10, step: 1 },
  });

  useFrame((state, delta) => {
    // console.log(state);
    // console.log(boxRef.current?.rotation.x);
    if (boxRef.current !== undefined && boxRef.current !== null) {
      boxRef.current.rotation.x += delta;
    }
    //scene.position.x += 0.01;
    //groupRef.current.rotation.x += delta;
  });

  useEffect(() => {
    if (wireCopyRef.current && wireRef.current) {
      wireCopyRef.current.geometry = wireRef.current.geometry;
    }
  }, [boxControl]);
  return (
    <>
      <directionalLight position={[5, 5, 5]}> </directionalLight>
      <mesh position={[2, 0, 0]} ref={wireRef}>
        <boxGeometry
          args={[
            boxControl.width,
            boxControl.height,
            boxControl.depth,
            boxControl.widthSeg,
            boxControl.heightSeg,
            boxControl.depthSeg,
          ]}
        ></boxGeometry>
        <meshStandardMaterial wireframe></meshStandardMaterial>
      </mesh>
      <mesh position={[2, 0, 0]} ref={wireCopyRef}>
        <meshStandardMaterial color="brown"></meshStandardMaterial>
      </mesh>

      <group ref={groupRef} rotation={[0, 0, 0]}>
        <mesh geometry={new Three.BoxGeometry(1, 1, 1)}>
          <meshStandardMaterial color="blue"></meshStandardMaterial>
        </mesh>
        <Box position={[-2, 0, 0]}>
          <meshStandardMaterial color="green"></meshStandardMaterial>
        </Box>
        <Sphere position={[0, -2, 0]}>
          <meshStandardMaterial color="pink"></meshStandardMaterial>
        </Sphere>
        <Cone position={[0, 0, -2]}>
          <meshStandardMaterial color="brown"></meshStandardMaterial>
        </Cone>

        <mesh
          ref={boxRef}
          rotation={[
            Three.MathUtils.degToRad(45),
            Three.MathUtils.degToRad(45),
            0,
          ]}
          position={[0, 0, 0]}
          position-x={[10]}
          position-y={[10]}
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
          position={[0, 0, 0]}
          position-x={[10]}
          position-y={[10]}
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
          position={[0, 0, 0]}
          position-x={[10]}
          position-y={[10]}
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
