import React, { useEffect, useState } from "react";
import helpimage from "../Image/helpimage.png";
import worldtourimage from "../Image/worldtourimage.png";
import amsterimage from "../Image/amsterimage.png";
import navigateimage from "../Image/navigateimage.png";
import mapimage from "../Image/mapimage.png";
import distanceimage from "../Image/distanceimage.png";
import calenderimage from "../Image/calenderimage.png";
import gritimage from "../Image/gritimage.png";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import clsx from "clsx";

function Mobilesection() {
  
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY+200);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const { ref, inView, entry } = useInView({
            /* Optional options */
            threshold: 0,
          });
        //   console.log(inView)
  return (
    <div   style={{
      transform:inView? `translateY(${-scrollY * 0.3}px)`:"", // Adjust the multiplier to control the translation intensity
       // Optional: Add a smooth transition effect
    }} ref={ref} className="mt-[35rem] sm:mt-[40rem] md:mt-0 md:pt-[60rem] xl:mt-[28rem]  ">
      <div className="grid  gap-x-3.5  overflow-x-hidden grid-cols-9 grid-rows-4 max-h-[180vh] w-full -my-[24rem] md:-my-0">
        <div className={clsx( "hidden col-span-1 row-start-1 lg:flex lg:flex-col lg:pt-[18rem] ", inView?" scale-110 duration-1000  transition-transform":"") }>
          <img
          
            className=" md:min-w-[10rem] lg:min-w-[5px]"
           
            src={helpimage}
            alt="image"
          />
          <img className=" " src={worldtourimage} alt="image" />
        </div>
        <div className={clsx( "min-w-[4rem] -ml-[3rem]  lg:col-span-1 lg:min-w-[2rem] lg:-ml-[0]", inView?" scale-110 duration-1000  transition-transform":"") }>
          <img className="  " src={amsterimage} alt="image" />
          <img className=" py-[1rem]" src={navigateimage} alt="image" />
          <img className=" " src={mapimage} alt="image" />
        </div>
        <div className={clsx( "pt-[5rem] md:col-span-2 md:min-w-[1rem] lg:pt-[10rem] min-w-[4rem] lg:ml-[1rem]  lg:col-span-1 ", inView?" scale-110 duration-1000  transition-transform":"") }>
          <img className="" src={distanceimage} alt="image" />
          <img className="pt-[1rem]" src={calenderimage} alt="image" />
        </div>
        <div  className="col-start-4 col-span-3   lg:ml-[1rem] -mt-[28rem] md:-mt-[54rem]">
          <img   style={{
      transform: inView ? `translateY(${scrollY * 0.3}px)` : "",
    }} className=" m-auto " src={gritimage} alt="image" />
        </div>
        <div className= {clsx( "md:col-span-2 lg:pt-[10rem] min-w-[4rem] pt-[5rem] lg:col-span-1 ", inView?" scale-110 duration-1000  transition-transform":"") }>
          <img className="" src={distanceimage} alt="image" />
          <img className="pt-[1rem]" src={calenderimage} alt="image" />
        </div>
        <div className={clsx( "min-w-[4rem] md:min-w-[7rem] ml-[3rem] lg:ml-[0]", inView?" scale-110 duration-1000  transition-transform":"") }>
          <img className="  " src={amsterimage} alt="image" />
          <img className="py-[1rem] " src={navigateimage} alt="image" />
          <img className=" " src={mapimage} alt="image" />
        </div>
        <div className={clsx( "hidden  lg:flex lg:flex-col lg:pt-[18rem]", inView?" scale-110 duration-1000  transition-transform":"") }>
          <img
            className=" lg:col-start-1 lg:row-span-2  "
            src={helpimage}
            alt="image"
          />
          <img className=" " src={worldtourimage} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Mobilesection;
