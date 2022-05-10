import './App.css';

import { Suspense, useRef } from 'react'
import * as THREE from 'three'

import { Canvas, useFrame } from "react-three-fiber";
import { Image, Environment, Loader,FirstPersonControls,PointerLockControls, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from 'leva'

function Zoom() {
  const { zoom } = useControls({ 
    zoom: { value: 0.6, min: 0.1, max: 1, step: 0.01 } })
  return useFrame((state) => {
    state.camera.zoom = THREE.MathUtils.lerp(state.camera.zoom, zoom * 2, 0.05)
    state.camera.updateProjectionMatrix()
  })
}

function App() {
  const videos = [
    "KE-sgHabrTo",
    "rpnj58CHZiM",
    "vZX3JJeT5Vc",
  ]
  return (
    <div className="App">
      <Leva
         titleBar={false}/>
       <Canvas style={{ height: "100vh", width: "100vw" }}>
       <color attach="background" args={["black"]} />
       <Suspense fallback={null}>


        <group transform position={[20, 0, -10]}>

          <YouTubeEmbed position={[-7, 0, 0.5]} link={videos[0]} rotation={[0 * (Math.PI / 180), - 45 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-20, 0, -5]} link = {videos[1]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]}/>
          <YouTubeEmbed position={[-33, 0, 0.5]} link = {videos[2]} rotation={[0 * (Math.PI / 180), 45 * (Math.PI / 180), 0]}/>

        </group>
        {/* <Environment 
        background={true}
        files={[
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c00.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c01.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c02.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c03.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c04.jpg`,
          `https://cdn.jsdelivr.net/gh/mrdoob/three.js@r123/examples/textures/cube/angus/cube_m00_c05.jpg`,
        ]}
        /> */}
        
        </Suspense>
        <ambientLight />
        <FirstPersonControls
          movementSpeed={1.5}
          lookSpeed= {0.00}
          />
          {/* <PointerLockControls/> */}
        {/* <OrbitControls 
         minDistance={1}
          maxDistance={20}
          minPolarAngle={-Math.PI}
          maxPolarAngle={Math.PI}
          minAzimuthAngle={-Math.PI * 0.1}
          maxAzimuthAngle={Math.PI * 0.1}
          // autoRotate="false"
        // autoRotateSpeed={0.4}
          /> */}
         {/* <PerspectiveCamera position={[-20, 0, -20]} /> */} 

         
         <Zoom />

      </Canvas>
      <Loader />

    </div>
  );
}

export default App;

function YouTubeEmbed(props) {
  return (
    <Html transform position={props.position} rotation={props.rotation}>
      {/* <p>{props.link}</p> */}
      {/* <img src={"https://img.youtube.com/vi/"+props.link+"/0.jpg"} alt="thumbnail" width="560" height="315"/> */}
      <iframe width="600" height="337.5" src={"https://www.youtube.com/embed/" + props.link + "?autoplay=1&mute=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Html>

    
  );
}

