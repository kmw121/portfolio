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
    radius: { value: 1, min: 1, max: 10, step: 0.1 },
    seg: { value: 32, min: 1, max: 100, step: 1 },
    thetaStart: { value: 0, min: 0, max: 360, step: 0.1 },
    thetaLength: { value: 360, min: 0, max: 360, step: 0.1 },
  });
  const circleControl = useControls({
    radius: { value: 1, min: 1, max: 10, step: 0.1 },
    seg: { value: 32, min: 1, max: 100, step: 1 },
    thetaStart: { value: 0, min: 0, max: 360, step: 0.1 },
    thetaLength: { value: 360, min: 0, max: 360, step: 0.1 },
  });

  useFrame((_, delta) => {
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
      <directionalLight position={[5, 5, 5]} intensity={5}>
        {" "}
      </directionalLight>
      {/* <fog attach={"fog"} args={["blue", 3, 10]}></fog>*/}
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
      <mesh position={[3, 3, 0]} ref={wireCopyRef}>
        <circleGeometry
          args={[
            circleControl.radius,
            circleControl.seg,
            circleControl.thetaStart,
            Three.MathUtils.degToRad(circleControl.thetaLength),
          ]}
        ></circleGeometry>
        <meshStandardMaterial color="black"></meshStandardMaterial>
      </mesh>

      <mesh position={[2, 0, 0]} ref={wireCopyRef}>
        <meshBasicMaterial
          //basic은 빛에 대한 영향을 받지 않음
          color="green"
          visible={true}
          transparent={true}
          opacity={0.7}
          side={Three.BackSide} // 렌더링 되는 위치(기본 frontside)
          alphaTest={0.46} //opatcity가 이 값이하면 안보임
          depthTest={false} // false일 경우 거리상관없이 무조건 보이게함
          depthWrite={false} // z버퍼에 이한 렌더링 무시
          fog={false} // fog값에 이해서 영향을 받지않음
        ></meshBasicMaterial>
      </mesh>

      <group ref={groupRef} rotation={[0, 0, 0]}>
        <mesh geometry={new Three.BoxGeometry(1, 1, 1)}>
          <meshLambertMaterial
            color="blue"
            emissive={"red"}
          ></meshLambertMaterial>
        </mesh>

        {/* <mesh position={[-2, 0, 0]}>
          <sphereGeometry>args={[1, 6, 20]}</sphereGeometry>
          <meshPhongMaterial
            color="green"
            specular={"#fff"} // 반사광
            shininess={5} // 반사광 범위
            flatShading={true} // 단면적 렌더링
          ></meshPhongMaterial>
        </mesh> */}

        <Sphere args={[1, 32, 20]} position={[-2, 0, 0]}>
          <meshPhongMaterial
            color="red"
            specular={"#fff"} // 반사광
            shininess={5} // 반사광 범위
            flatShading={true} // 단면적 렌더링
          ></meshPhongMaterial>
        </Sphere>
        <Box position={[0, -2, 0]}>
          <meshNormalMaterial></meshNormalMaterial>
          {/* 백터에 따른 rgb 표현 */}
        </Box>
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
