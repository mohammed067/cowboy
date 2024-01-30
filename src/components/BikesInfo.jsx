import React from 'react'
import arrow from '../Image/arrow.svg'

function BikesInfo({heading,info,image,ride,classname,bikeclassname,colr}) {
  return (
    <div className='overflow-hidden rounded-md' >
        <div className={classname}  style={{ background: `${colr}` }} >
            <div className='p-[2rem]'>
            <p className='text-gray-500'>{heading}</p>
            <h2 className='text-2xl'>{info} </h2>
            </div>
            
            <img className='-mx-[2rem] ' src={image}/>
            <div className={bikeclassname}>
            <p>{ride}</p>
            <img className='w-[20px]' src={arrow}/>
            </div>
            
        </div>
    </div>
  )
}

export default BikesInfo