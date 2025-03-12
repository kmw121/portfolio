import { ThreeEvent } from "@react-three/fiber";
import * as Three from "three";

export default function InteractionTest() {
  function clickFunction(e: ThreeEvent<MouseEvent>) {
    const mesh = e.object as Three.Mesh;
    const randomColor = new Three.Color(
      Math.random(),
      Math.random(),
      Math.random()
    );

    if (Array.isArray(mesh.material)) {
      mesh.material.forEach((mat) => {
        if (mat instanceof Three.MeshStandardMaterial) {
          mat.color.set(randomColor);
        }
      });
    } else {
      if (mesh.material instanceof Three.MeshStandardMaterial) {
        mesh.material.color.set(randomColor);
      }
    }
  }

  function overFunction(e: ThreeEvent<MouseEvent>) {
    const mesh = e.object as Three.Mesh;
    mesh.scale.set(Math.random(), Math.random(), Math.random());
  }

  function outFunction(e: ThreeEvent<MouseEvent>) {
    const mesh = e.object as Three.Mesh;

    mesh.scale.set(1, 1, 1);
  }
  return (
    <>
      <ambientLight></ambientLight>
      <directionalLight intensity={5}>
        <mesh
          onClick={(e) => {
            clickFunction(e);
          }}
          position={[1, 0, 0]}
          //   onContextMenu={(e) => {
          //     console.log("context menu");
          //     console.log(e);
          //   }}
          //   onDoubleClick={(e) => {
          //     console.log("double click");
          //     console.log(e);
          //   }}
          //   onWheel={(e) => {
          //     console.log("wheel spins");
          //     console.log(e);
          //   }}
          //   onPointerUp={(e) => {
          //     console.log("up");
          //     console.log(e);
          //   }}
          //   onPointerDown={(e) => {
          //     console.log("down");
          //     console.log(e);
          //   }}
          onPointerOver={(e) => {
            console.log("over");

            overFunction(e);
          }}
          onPointerOut={(e) => {
            console.log("out");
            outFunction(e);
          }}
          //over와 out은 자식요소까지 이벤트 적용

          onPointerEnter={(e) => {
            console.log("enter");
            overFunction(e);
          }}
          onPointerLeave={(e) => {
            console.log("leave");
            outFunction(e);
          }}
          //enter와 leave는 부모요소만 적용

          //   onPointerMove={(e) => {
          //     console.log("move");
          //     console.log(e);
          //   }}
          //   onPointerMissed={(e) => {
          //     console.log("missed");
          //     console.log(e);
          //   }}
          //   onUpdate={(e) => {
          //     console.log("props have been updated");
          //     console.log(e);
          //   }}
        >
          <boxGeometry></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
          <mesh scale={[2, 2, 2]} position={[1, 0, 0]}>
            <boxGeometry></boxGeometry>
            <meshStandardMaterial color={"red"}></meshStandardMaterial>
          </mesh>
        </mesh>
      </directionalLight>
    </>
  );
}
