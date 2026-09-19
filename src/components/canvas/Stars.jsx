import React, {useState, useRef, useEffect, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload, Sphere } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Group } from 'three'
import CanvasGuard, { watchContextLoss } from './CanvasGuard'

const Stars = ({ onReady, ...props }) => {

  const ref = useRef()

  useEffect(() => {
    onReady?.()
  }, [onReady])

  const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2} )

  useFrame((state, delta)=> {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15


  })

  return (
   <group rotation={[0, 0, Math.PI / 4]}>
    <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
    <PointMaterial
    transparent
    color='#f272c8'
    size={0.002}
    sizeAttenuation={true}
    deptWrite={false}
    />

    </Points>
   </group>
  )
}

const StarsCanvas = () => {

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>

      {/* Purely decorative: if WebGL fails, render nothing instead of crashing the page */}
      <CanvasGuard fallback={null}>
        {({ ready, fail }) => (
          <Canvas
            camera={{ position: [0, 0, 1]}}
            onCreated={(state) => watchContextLoss(state, fail)}
          >

            <Suspense fallback={null}>

              <Stars onReady={ready} />

            </Suspense>

            <Preload all />
          </Canvas>
        )}
      </CanvasGuard>

    </div>
  )

}

export default StarsCanvas