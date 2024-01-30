import React from 'react'
import Servicesinfo from './ServicesInfo'
import allservices from '../Image/allservices.jpg'
import careimage from '../Image/careimage.jpg'
import insurancecycle from '../Image/insurancecycle.jpg'

function Services({val}) {
  return (
    <div>
    <div className={ `${val===true?"bg-white":""} grid grid-cols-4 gap-2 px-[1rem] `}>
        
    <Servicesinfo
        classname=""
        colr=""
        heading="OUR E-BIKES"
         info="All services "
         ride="Book a test ride"
         imageclassname='-mx-[2rem] -mt-[8rem]'
         bikeclassname="flex items-center gap-2 p-[2rem]  mt-[80%]"
        />
        <Servicesinfo
         heading="support at every turn "
        //  colr='linear-gradient(225deg,#e7eae7 30.32%,#f6f0e9 100.3%)'
         info="All services"
         bikeclassname="hidden"
         ride=""
         headingclassname="text-[#ffff]"
         infoclassname="text-3xl text-white"
         imageclassname='-mx-[2rem] -mt-[8rem]'
         image={allservices}/>
        <Servicesinfo
         heading="Expert technical service "
        //  colr='linear-gradient(225deg,#e7eae7 30.32%,#f6f0e9 100.3%)'
         info="Cowboy Care"
         bikeclassname="hidden"
         ride=""
         headingclassname="text-[#ffff]"
         imageclassname='-mx-[2rem] -mt-[8rem]'
         infoclassname="text-3xl text-white"
         image={careimage}/>

         <div className='lg:-mt-[3.5rem]'>
         <Servicesinfo
         heading="Added protection on the road "
        //  colr='linear-gradient(224deg,#e3e5fc 20%,#f8f9fc 81.18%)'
         info="Theft Insurance"
         bikeclassname="hidden"
         ride=""
         headingclassname="text-black py-[3rem]"
         imageclassname='-mx-[2rem] -mt-[14rem] xl:-mt-[10rem] xl:h-[380px]'
         infoclassname="text-3xl text-white"
         image={insurancecycle}/>
         </div>
      
    </div>
</div>
  )
}

export default Services