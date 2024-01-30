import React from 'react'
import arrow from '../Image/arrow.svg'

function ServicesInfo({imageclassname,heading,info,image,ride,classname,bikeclassname,colr,headingclassname,infoclassname}) {
  return (
    <div className='overflow-hidden rounded-md' >
    <div className={classname}  style={{ background: `${colr}` }} >
        <div className='p-[2rem] relative'>
        <p className={headingclassname}>{heading}</p>
        <h2 className={infoclassname}>{info} </h2>
        </div>
        
        <img className={imageclassname} src={image}/>
        <div className={bikeclassname}>
        <p>{ride}</p>
        <img className='w-[20px]' src={arrow}/>
        </div>
        
    </div>
</div>
  )
}

export default ServicesInfo