import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeEelement";
//import TestThree from "./test";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

function App() {
  const color = useControls({
    value: "white",
  });

  const grid = useControls({
    segment: { value: 10, min: 2, max: 100, step: 1 },
  });

  const grid2 = useControls({
    axesLength: { value: 5, min: 1, max: 10, step: 0.5 },
  });

  return (
    <>
      <Canvas
        //orthographic
        camera={{
          near: 1,
          far: 20,
          fov: 75,
          position: [5, 5, 5],
        }}
      >
        <color attach="background" args={[color.value]}></color>
        <OrbitControls></OrbitControls>
        <axesHelper args={[grid2.axesLength]} />
        <gridHelper args={[10, grid.segment, "red", "blue"]}></gridHelper>
        <ThreeElement></ThreeElement>
        {/* <TestThree></TestThree>*/}
      </Canvas>
      basic
    </>
  );
}

export default App;
