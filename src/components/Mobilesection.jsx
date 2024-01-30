import React, { useRef } from "react";
import helpimage from "../Image/helpimage.png";
import worldtourimage from "../Image/worldtourimage.png";
import amsterimage from "../Image/amsterimage.png";
import navigateimage from "../Image/navigateimage.png";
import mapimage from "../Image/mapimage.png";
import distanceimage from "../Image/distanceimage.png";
import calenderimage from "../Image/calenderimage.png";
import gritimage from "../Image/gritimage.png";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

function Mobilesection() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const newscroll = useTransform(scrollYProgress, [0.1, 1], [0, -100]);

  return (
    <div className="xl:pt-[15rem] pt-[28rem] mb-10 md:pt-[10rem] min-h-[100vh]" ref={ref}>
      <div className="grid gap-x-3.5 md:grid-rows-1 overflow-x-hidden  grid-cols-9 grid-rows-2 xl:grid-rows-1 max-h-[180vh] w-full -my-[24rem] md:-my-0">
        <motion.div
          transition={{
            delay:0.8,
          }}
          className="hidden col-span-1 row-start-1 lg:flex lg:flex-col lg:pt-[18rem] duration-1000 transition-all"
          style={{
            translateY: newscroll,
          }}
        >
          <img className="md:min-w-[10rem]   lg:min-w-[5px]" src={helpimage} alt="image" />
          <img className="" src={worldtourimage} alt="image" />
        </motion.div>
        <motion.div
         transition={{
          delay:0.8,
        }}
          className="min-w-[3rem] -ml-[3rem] lg:col-span-1 lg:min-w-[2rem] lg:-ml-[0] duration-1000 transition-all"
          style={{
            translateY: newscroll,
          }}
        >
          <img className="" src={amsterimage} alt="image" />
          <img className="py-[1rem]" src={navigateimage} alt="image" />
          <img className="" src={mapimage} alt="image" />
        </motion.div>
        <motion.div
        transition={{
          delay:0.8,
        }}
          className="pt-[5rem] md:col-span-2 md:min-w-[1rem] lg:pt-[10rem] min-w-[4rem] lg:ml-[1rem] lg:col-span-1 duration-1000 transition-all"
          style={{
            translateY: newscroll,
          }}
        >
          <img className="" src={distanceimage} alt="image" />
          <img className="pt-[1rem]" src={calenderimage} alt="image" />
        </motion.div>
        <div className="col-start-4 col-span-3">
          <img className="m-auto" src={gritimage} alt="image" />
        </div>
        <motion.div
                transition={{
                  delay:0.8,
                }}
                  
          className="md:col-span-2 lg:pt-[10rem] min-w-[4rem] pt-[5rem] lg:col-span-1  duration-1000 transition-all"
          style={{
            translateY: newscroll,
          }}
        >
          <img className="" src={distanceimage} alt="image" />
          <img className="pt-[1rem]" src={calenderimage} alt="image" />
        </motion.div>
        <motion.div
         transition={{
          delay:0.8,
        }}
          className="min-w-[4rem] md:min-w-[7rem] ml-[3rem] lg:ml-[0] duration-1000 transition-all"
          style={{
            translateY: newscroll,
          }}
        >
          <img className="" src={amsterimage} alt="image" />
          <img className="py-[1rem]" src={navigateimage} alt="image" />
          <img className="" src={mapimage} alt="image" />
        </motion.div>
        <motion.div
         transition={{
          delay:0.8,
        }}
          className="hidden lg:flex lg:flex-col lg:pt-[18rem] duration-1000 transition-all"
          style={{
            translateY: newscroll,
          }}
        >
          <img className="lg:col-start-1 lg:row-span-2" src={helpimage} alt="image" />
          <img className="" src={worldtourimage} alt="image" />
        </motion.div>
      </div>
    </div>
  );
}

export default Mobilesection;
