import React from 'react'
import BikesInfo from './BikesInfo'
import blackcycle from '../Image/blackcycle.png'
import orangecycle from '../Image/orangecycle.png'
import lavendercycle from '../Image/lavendercycle.png'

function Bikes({val}) {
  return (
    <div className={`${val===true?" bg-white ":""}`}>
        <div className={`grid grid-cols-4 gap-2 px-[1rem]`}>
            <BikesInfo 
            classname=""
            colr=""
            heading="OUR E-BIKES"
             info="Three models to choose from "
             ride="Book a test ride"
             bikeclassname="flex items-center gap-2 p-[2rem]  mt-[20%]"
            />
            <BikesInfo
             heading="Delivered from 10 days "
             colr='linear-gradient(225deg,#e7eae7 30.32%,#f6f0e9 100.3%)'
             info="Classic"
             bikeclassname="hidden"
             ride=""
             image={blackcycle}/>
            <BikesInfo
             heading="Delivered from 10 days "
             colr='linear-gradient(225deg,#e7eae7 30.32%,#f6f0e9 100.3%)'
             info="Cruiser"
             bikeclassname="hidden"
             ride=""
             image={orangecycle}/>
            <BikesInfo
             heading="Delivered from 10 days "
             colr='linear-gradient(224deg,#e3e5fc 20%,#f8f9fc 81.18%)'
             info="Cruiser ST"
             bikeclassname="hidden"
             ride=""
             image={lavendercycle}/>
        </div>
    </div>
  )
}

export default Bikes