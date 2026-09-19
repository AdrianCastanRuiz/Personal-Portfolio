import React, { useEffect, useState } from 'react'
import { BallCanvas } from './canvas'
import BallFallback from './canvas/BallFallback'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'

// Same breakpoint as the navbar (Tailwind `sm`). Below it the rotating 3D
// balls are replaced by static images so nothing depends on WebGL on phones.
const MOBILE_QUERY = '(max-width: 639px)'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const handleChange = (e) => setIsMobile(e.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}

const Tech = () => {
  const isMobile = useIsMobile()

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=> (

        <div className='w-28 h-28' key={technology.name}>

          {isMobile ? (
            <BallFallback icon={technology.icon} name={technology.name} />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}

        </div>

      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'')
