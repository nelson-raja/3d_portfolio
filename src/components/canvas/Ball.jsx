import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture,  } from '@react-three/drei';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1} rotationIntensity={1}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal position={[0,0,1]} map={decal} rotation={[2*Math.PI, 0, 6.25]} flatShading/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icons}) =>{
  return (
    <>
     <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
  >
    {/*  fallback={<CanvasLoader />} */}
      <Suspense>
      <OrbitControls 
      enableZoom={false}
      />  
      <Ball imgUrl={icons}/>
      </Suspense>
      <Preload all />
  </Canvas>
    </>
   
  )
}

export default BallCanvas