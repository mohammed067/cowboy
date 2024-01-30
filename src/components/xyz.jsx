import React from 'react'
import helpimage from "../Image/helpimage.png";
import worldtourimage from "../Image/worldtourimage.png";
import amsterimage from "../Image/amsterimage.png";
import navigateimage from "../Image/navigateimage.png";
import mapimage from "../Image/mapimage.png";
import distanceimage from "../Image/distanceimage.png";
import calenderimage from "../Image/calenderimage.png";
import gritimage from "../Image/gritimage.png";

function Mobilesection() {
  return (
    <div>

<div className="grid  gap-x-3.5  overflow-x-hidden grid-cols-5 grid-rows-4 max-h-[180vh] w-full ">
                    <img className="   " src={helpimage} alt='image' />
                    <img  className='col-start-2 row-start-1  my-[5rem] -mx-[6rem] min-w-[15rem]     md:min-w-[25rem] md:-mx-[7rem] md:my-[8rem] lg:-mx-[3rem] xl:min-w-[33rem] xl:my-[6rem]  ' src={worldtourimage} alt='image' />
                    <img className='col-start-4 col-span-1 row-start-1 mx-2 my-[3rem] min-w-[7rem]   md:min-w-[12rem]  xl:my-[1rem] xl:-mx-[2rem]  ' src={amsterimage} alt='image' />
                    <img className='col-start-5 row-start-1 row-span-2 min-w-[13rem] mx-[8rem] mt-[7rem] md:min-w-[12rem] md:my-[15rem] xl:my-[10rem] xl:mx-[5rem]  ' src={navigateimage} alt='image' />
                    <img className='col-start-2 row-start-2 min-w-[9rem] -my-[7rem] -mx-[5rem] md:min-w-[15rem] md:-mx-[6rem] md:my-[3rem] lg:-mx-2 lg:-my-7  xl:my-[4rem] ' src={mapimage} alt='image' />
                    <img className='row-start-2 col-start-3 -my-[6rem] md:my-[3rem] md:w-[7rem ] lg:w-[7rem] lg:mx-[4rem] lg:-my-[4rem] xl:my-[5rem] xl:mx-[1rem]' src={distanceimage} alt='image' />
                    <img className='row-start-3 col-start-3    col-span-3  min-w-[17rem] -mx-[1rem] -my-[20rem]  md:min-w-[10rem]  md:-my-[6rem] lg:-my-[19rem] lg:w-[29rem] lg:mx-[3rem]  xl:-my-[8rem] xl:mx-[1rem] xl:min-w-[32rem]' src={calenderimage} alt='image' />

            </div>
    </div>
  )
}

export default Mobilesection