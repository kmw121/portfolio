import * as Three from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
//import { useThree } from "@react-three/fiber";
import { Environment, Sphere, useHelper, useTexture } from "@react-three/drei";
import { useControls } from "leva";
export default function LightTest() {
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

  const tone = useTexture("./imgs/fiveTone.jpg");
  tone.minFilter = Three.NearestFilter;
  tone.magFilter = Three.NearestFilter;

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
  const dLight = useRef<Three.DirectionalLight>(null!);
  useHelper(dLight, Three.DirectionalLightHelper);

  const sLight = useRef<Three.DirectionalLight>(null!);
  useHelper(sLight, Three.SpotLightHelper);

  return (
    <>
      {/* ambientLight = 간접광 
          hemisphereLight = 주변광 (색2개), 돔라이트(하늘색깔 조명, 바닥색깔 조명)
          (간접광은 shadow를 만들 수 없음)
          directionalLight = 방향이 있는 햇빛같은 광원
          pointLight = 백열등 같이 전체적으로 퍼지는 빛
          spotLight = 무대 조명
      */}
      {/* <ambientLight color={"blue"} intensity={10}></ambientLight>  */}
      {/* <hemisphereLight args={["blue", "yellow", 5]}></hemisphereLight> */}
      <directionalLight
        castShadow
        shadow-camera-top={10}
        shadow-camera-bottom={10}
        shadow-camera-left={10}
        shadow-camera-right={10}
        shadow-mapSize={[1024, 1024]} // 그림자 해상도
        ref={dLight}
        color={"#fff"}
        position={[5, 5, 5]}
        intensity={5}
        target-position={[0, 0, 0]}
      ></directionalLight>

      {/* <pointLight
        color={"#fff"}
        position={[5, 5, 5]}
        intensity={100}
        distance={60}
      ></pointLight> */}
      {/* <spotLight
        ref={sLight}
        color={"#fff"}
        position={[0, 5, 0]}
        intensity={300}
        distance={10}
        angle={Three.MathUtils.degToRad(10)}
        target-position={[0, 0, 0]}
        penumbra={0.8}
      ></spotLight> */}

      <Environment
        files={"./imgs/hdr1.hdr"}
        blur={0.01}
        background
      ></Environment>

      <mesh
        rotation={[Three.MathUtils.degToRad(-90), 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[15, 15]}></planeGeometry>
        <meshStandardMaterial
          color={"#444444"}
          side={Three.DoubleSide}
        ></meshStandardMaterial>
      </mesh>
      <mesh position={[3, 3, 0]} ref={wireCopyRef} castShadow>
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
      <group ref={groupRef} rotation={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={new Three.BoxGeometry(1, 1, 1)}
        >
          <meshLambertMaterial color="blue"></meshLambertMaterial>
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

        <Sphere
          receiveShadow
          castShadow
          args={[1, 32, 20]}
          position={[-2, 0, 0]}
        >
          <meshPhongMaterial
            flatShading={true} // 단면적 렌더링
          ></meshPhongMaterial>
        </Sphere>

        {/* PBR(물리 기반 렌더링) standard, physical */}
        <Sphere castShadow position={[0, 0, -2]}>
          <meshStandardMaterial
            color="gray"
            roughness={1} //거칠기
            metalness={0.2} //금속성
            flatShading={false}
          ></meshStandardMaterial>
        </Sphere>

        <mesh castShadow position={[0, 0, 2]}>
          <torusKnotGeometry args={[0.5, 0.2]}></torusKnotGeometry>
          <meshPhysicalMaterial
            color="pink"
            emissive={"black"}
            visible={true}
            alphaTest={0}
            depthTest={true}
            depthWrite={true}
            fog={true}
            side={Three.FrontSide}
            roughness={0} //거칠기
            metalness={0} //금속성
            clearcoat={0} //표면코팅
            clearcoatRoughness={0} //코팅거칠기
            transparent={true}
            transmission={1} //유리 투명도dddd
            thickness={1} // 유리두께
            ior={1.5} // 굴절율
            flatShading={false}
          ></meshPhysicalMaterial>
        </mesh>

        <mesh castShadow position={[2, 0, 0]}>
          <torusKnotGeometry args={[0.5, 0.2]}></torusKnotGeometry>
          <meshToonMaterial gradientMap={tone} color="pink"></meshToonMaterial>
          {/* tone에 따른 표현 (만화처럼 표현) */}
        </mesh>

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
