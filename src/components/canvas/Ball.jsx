import React, {Suspense, useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader'
import CanvasGuard, { watchContextLoss } from './CanvasGuard'

const Ball = (props) => {

  const { onReady } = props
  const [decal] = useTexture([props.imgUrl])

  useEffect(() => {
    onReady?.()
  }, [onReady])

  return (
   <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.25} />
    <directionalLight position={[0, 0, 0.05]} />
  
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
      color='#fff8eb'
      polygonOffset
      polygonOffsetFactor={-5}
      flatShading
      />
      <Decal 
      position={[0, 0, 1]}
      rotation={[  2 * Math.PI, 0, 6.25]}
      flatShading
      map={decal}
      />
    </mesh>
   </Float>
  )
}

const BallCanvas = ( {icon} ) => {
  return (
    <CanvasGuard
      fallback={
        <div className='w-full h-full flex items-center justify-center rounded-full bg-[#fff8eb]'>
          <img src={icon} alt='' className='w-1/2 h-1/2 object-contain' />
        </div>
      }
    >
      {({ ready, fail }) => (
        <Canvas
        frameloop='demand'
        gl={{preserveDrawingBuffer: true}}
        onCreated={(state) => watchContextLoss(state, fail)}
        >

          <Suspense fallback={<CanvasLoader/>} >
            <OrbitControls enableZoom={false}/>
            <Ball imgUrl={icon} onReady={ready}/>
          </Suspense>

          <Preload all />

        </Canvas>
      )}
    </CanvasGuard>
  )
}

export default BallCanvas