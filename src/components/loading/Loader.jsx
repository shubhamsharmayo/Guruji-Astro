import React from 'react'
import { tailChase } from 'ldrs'

tailChase.register()

const Loader = () => {
  return (
    <div>


<l-tail-chase
  size="17"
  speed="1.75" 
  color="white" 
></l-tail-chase>
    </div>
  )
}

export default Loader
