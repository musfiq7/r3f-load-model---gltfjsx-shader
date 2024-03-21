/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";


const vertexShader =`

void main(){
 
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  // modelPosition.x += sin(modelPosition.y * 4.0 + testParam) * 0.2;
  //  modelPosition.y += sin(modelPosition.y * 4.0 ) * 2.0;
  
  vec4 viewPosition = viewMatrix * modelPosition;
  
  vec4 projectedPosition = projectionMatrix * viewPosition ;
  
  gl_Position = projectedPosition; 
}


`;
const fragmentShader =`

void main(){
  gl_FragColor = vec4(1.0,1.0,0.0,1.0);
}

`;

function MyModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/mushroom_new.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="0740ae42397844d88fb8abf43d6705effbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Wolf_Spider_Armature"
                  position={[0, 0.593, 1.026]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.327}
                >
                  <group name="Object_6">
                    <group
                      name="Object_8"
                      position={[0, 0.593, 1.026]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={0.327}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Wolf_Spider_Material}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
                <group
                  name="Wolf_Spider_Rigged"
                  position={[0, 0.593, 1.026]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.327}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="0740ae42397844d88fb8abf43d6705effbx001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2001">
              <group name="RootNode001">
                <group
                  name="Wolf_Spider_Armature001"
                  position={[0, 0.593, 1.026]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.327}
                >
                  <group name="Object_6001">
                    <group
                      name="Object_8001"
                      position={[0, 0.593, 1.026]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={0.327}
                    />
                    <skinnedMesh
                      name="Object_9001"
                      geometry={nodes.Object_9001.geometry}
                      material={materials["Wolf_Spider_Material.001"]}
                      skeleton={nodes.Object_9001.skeleton}
                    />
                    <primitive object={nodes._rootJoint_1} />
                  </group>
                </group>
                <group
                  name="Wolf_Spider_Rigged001"
                  position={[0, 0.593, 1.026]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.327}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model002"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.749}
        >
          <group
            name="6a50e346ab6d4673aee558a29bdd7fbdfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode002">
              <group name="Circle">
                <mesh
                  name="Circle_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Circle001">
                <mesh
                  name="Circle001_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle001_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Circle002">
                <mesh
                  name="Circle002_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle002_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Circle004">
                <mesh
                  name="Circle004_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle004_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Circle005">
                <mesh
                  name="Circle005_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle005_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Circle006">
                <mesh
                  name="Circle006_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle006_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Cube">
                <mesh
                  name="Cube_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Cube001">
                <mesh
                  name="Cube001_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube001_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere002">
                <mesh
                  name="Icosphere001_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere001_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere003">
                <mesh
                  name="Icosphere002_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere002_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere004">
                <mesh
                  name="Icosphere004_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere004_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere005">
                <mesh
                  name="Icosphere003_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere003_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere006">
                <mesh
                  name="Icosphere006_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere006_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere007">
                <mesh
                  name="Icosphere007_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere007_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere008">
                <mesh
                  name="Icosphere008_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere008_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere009">
                <mesh
                  name="Icosphere009_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere009_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere010">
                <mesh
                  name="Icosphere010_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere010_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere011">
                <mesh
                  name="Icosphere005_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere005_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere012">
                <mesh
                  name="Icosphere011_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere011_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Icosphere013">
                <mesh
                  name="Icosphere012_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Icosphere012_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Plane">
                <mesh
                  name="Plane_ground_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_ground_0.geometry}
                  material={materials.ground}
                />
              </group>
              <group name="Plane001">
                <mesh
                  name="Plane001_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane001_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Plane002">
                <mesh
                  name="Plane002_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane002_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Plane003">
                <mesh
                  name="Plane003_mushroms_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane003_mushroms_0.geometry}
                  material={materials.mushroms}
                />
              </group>
              <group name="Plane004">
                <mesh
                  name="Plane004_ground_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane004_ground_0.geometry}
                  material={materials.ground}
                >
                <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader}/>
                </mesh>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mushroom_new.glb");

export default MyModel;
