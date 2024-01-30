import React from 'react'
import rightarrow from '../Image/rightarrow.svg'
import blackcycle from '../Image/blackcycle.png'
import Boycare from './Boycare'

import allservices from '../Image/allservices.jpg'
import careimage from '../Image/careimage.jpg'

function Boyinfo() {
  return (
    <div className='bg-[#f0f0ec] h-screen px-[1rem] xl:px-[4rem]  xl:gap-0  w-[100vw]'>
  <h2 className='text-[#777;] pt-[1rem] xl:text-[22px]'>Cowboy at your service</h2>
  <h2 className='text-[#1D1D1D]  pt-[1rem] xl:text-[30px] xl:w-[25vw]'>A network of support at the ready and on the road</h2>
  <h2 className='text-[#1D1D1D] pt-[1rem]'>
    Learn more
  </h2>
    
    <div className='flex gap-2 overflow-x-scroll pt-[1rem]   '>
      <Boycare backgroundimg={allservices}
      heading="What's included"
      image={rightarrow} />
      

<Boycare backgroundimg={careimage}
      heading="mohammed abdul rahaman"
      image={rightarrow} />

<Boycare backgroundimg={allservices}
      heading="mohammed abdul rahaman"
      image={rightarrow} />

<Boycare backgroundimg={allservices}
      heading="What's included"
      image={rightarrow} />
      

<Boycare backgroundimg={careimage}
      heading="mohammed abdul rahaman"
      image={rightarrow} />

<Boycare backgroundimg={allservices}
      heading="mohammed abdul rahaman"
      image={rightarrow} />


      


    </div>


    
    </div>
  )
}

export default Boyinfo