import React from 'react'
import Carousell from '../caraousel/Carousel'
import "./main.css"

function Main() {
  return (
    <div className="flex flex-col w-full items-center pt-2 text-white text-xs">
    <p className="font">polygame crypto game streaming platform</p>
    <p className="text-4xl" id="screen">
      Watch<span className='text-lime-300'>it</span >.Own<span className="text-orange-400">it</span>.Earn<span className='text-lime-300'>it</span>
    </p>
    <div>
    <Carousell/>
    </div>
  </div>
  )
}

export default Main
