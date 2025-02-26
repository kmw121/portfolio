import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeEelement";
function App() {
  return (
    <>
      <Canvas
        //orthographic
        camera={{
          zoom: 100,
          near: 1,
          far: 20,
          fov: 75,
          position: [5, 5, 0],
        }}
      >
        <ThreeElement></ThreeElement>
      </Canvas>
      basic
    </>
  );
}

export default App;
