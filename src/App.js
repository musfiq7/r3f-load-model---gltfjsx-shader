import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader,useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { useRef, useState } from 'react'
import { ScrollControls } from '@react-three/drei'
import { Scroll } from '@react-three/drei'
import "./App.css";
import Interface from './components/Interface'
import MyModel from './components/MyModel'

export default function App() {
  // const gltf = useLoader(GLTFLoader, 'Stalked-jelly.gltf');
  // const gltf = useLoader(GLTFLoader, 'Stalked-jelly.gltf');
  // const gltf = useLoader(GLTFLoader, 'monkey.glb');
    // const gltf = useLoader(GLTFLoader, 'forest.glb');
    // const gltf = useLoader(GLTFLoader, 'mushroom_new.glb');
    //  const gltf = useLoader(GLTFLoader, 'Ghost_Skull.glb');
    //const gltf = useLoader(GLTFLoader, 'branise.gltf');
  
  

  return (
    <>
    
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 32 }}>
    
      <directionalLight
        // position={[3.3, 1.0, 4.4]}
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
     
      <OrbitControls target={[0, 0, 0]} autoRotate enableZoom={false}/>
      {/* <axesHelper args={[5]} /> */}
      <MyModel/>
      <Stats />
      
    </Canvas>
    {/* <h1>hello world</h1> */}
    </>
  )
}