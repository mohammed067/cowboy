import React from 'react'
import allservices from '../Image/allservices.jpg'
import blackcycle from '../Image/blackcycle.png'



function Boycare({backgroundimg,heading,image}) {
  return (
    <div>
             <div className=' bg-contain bg-no-repeat   h-[50vh] w-[19rem]  ' style={{ backgroundImage: `url(${backgroundimg})` }}>
      <div className=' flex justify-between mx-[1rem] pt-[18rem] xl:pt-[18rem]' >
        <h2 className='text-white  '>{heading}</h2>
        <img className='h-[20px]  xl:mx-[3rem] ' src={image} alt='image'/>
     </div>
    </div>
   
    </div>
     
   
  )
}

export default Boycare