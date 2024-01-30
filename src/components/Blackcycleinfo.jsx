import React from "react";
import downarrow from "../Image/downarrow.png";
import blackcycle2 from "../Image/blackcycle2.png";
import blackcycle from "../Image/blackcycle.png";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

function Blackcycleinfo() {
  const { ref, inView, entry } = useInView({
          /* Optional options */
          threshold: 0,
        });
        
        const { ref: myRef, inView: inView1, entry: entry1 } = useInView({
          /* Optional options */
          threshold: 0.5,
        });
return (
  <>
    <div ref={myRef} style={{ background: "linear-gradient(225deg,#e7eae7 30.32%,#f6f0e9 100.3%)" }} >
      <div className=" w-full py-[2rem]  lg:grid-cols-2 lg:grid-rows-2 lg:hidden">
        <div className={clsx(" justify-center text-center lg:col-start-2 lg:hidden",inView1?" duration-[3s] opacity-100  transition-opacity":" opacity-0")}>
          <p className="text-[#1D1D1D]">Cruiser</p>
          <div className="md:justify-center md:flex md:py-5">
            <p className="lg:text-4xl text-2xl px-[2rem]  md:text-[2rem] md:w-[17rem] ">
              Rise up to ride in comfort
            </p>
          </div>
        </div>
        <p className="text-[#1D1D1D99] w-full text-center lg:hidden">
          From 2.490
        </p>

        <div className=" overflow-x-hidden w-full col-start-1 row-start-1 row-span-2 lg:grid lg:grid-cols-2 lg:grid-row-2 ">
          <div className="min-w-max overflow-hidden object-center ">
            <img
            className={clsx(" w-[110vw]   relative -left-4 lg:hidden",inView1?"scale-110 transition-transform duration-[3s]":"")}
              src={blackcycle}
            />
           
          </div>
        </div>

        <div className=" flex  items-center flex-col w-[100vw] py-3 lg:row-start-2 col-start-2 lg:w-[100%] lg:hidden">
          <div>
            <button className="bg-black text-white px-[2rem] py-2 w-[50vw] rounded-full lg:w-[20vw]">
              Explore
            </button>
          </div>

          <div>
            <li className="text-[#1D1D1D]  flex gap-2  text-sm bg-transparent py-2">
              Book a free test ride
              <img className="w-[16px]" src={downarrow} />
            </li>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <hr className="mx-[2rem]   w-[80vw]" />
        <div className=" grid grid-cols-3 py-[1rem] gap-10 px-2 lg:justify-center lg:col-span-2">
          <div>
            <p className="text-[#818799] text-[8px]">Find My Bike</p>
            <p className="text-[10px]">Theft Detection</p>
          </div>
          <div className="border-x-2  pl-2">
            <p className="text-[#818799] text-[8px]">AdaptivePower</p>
            <p className="text-[10px]">Automatic assistance</p>
          </div>
          <div>
            <p className="text-[#818799] text-[8px]">Cowboy Mobile Service</p>
            <p className="text-[10px]">At-home repairs</p>
          </div>
        </div>
      </div>
    </div>
    {/* large screen view */}
    <div  ref={ref} className="hidden lg:flex h-[90vh]  justify-end overflow-x-hidden overflow-y-hidden" style={{ background: "linear-gradient(225deg,#e7eae7 30.32%,#f6f0e9 100.3%)" }}>
      <div className="grid grid-cols-2 pt-[13rem] px-[2rem]">
        <img className={clsx("px-[2rem]", inView?" scale-110 duration-1000  transition-transform":"") } src={blackcycle2} />
        <div className={clsx("px-[6rem]  opacity-0",inView?" duration-[3s] opacity-100  transition-opacity":" opacity-0")} >
          <p className="text-[#1D1D1D]">Cruiser</p>
          <p className="lg:text-[4rem] w-[27rem]">Rise up to ride in comfort</p>
          <div className={clsx("lg:flex lg:justify-between py-[2rem] opacity-0",inView?" duration-[3s] opacity-100  transition-opacity":" opacity-0")}>
            <button
              type="button"
              class=" outline outline-1 outline-offset-2  font-medium rounded-full bg-[#1D1D1D] text-white text-sm px-5 py-[0.4rem] text-center mr-2 mb-2"
            >
              EXPLORE
            </button>

            <p className="text-[#1D1D1D99]">From 2.490</p>
            <a href="#about" className="bg-transparent px-2 font-semibold">
              <li className="text-[#818799] flex gap-2  text-sm bg-transparent">
                Book a free test ride
                <img className="w-[16px]" src={downarrow} />
              </li>
            </a>
          </div>

          <div className="">
        
        <div className=" grid grid-cols-3 py-[1rem] gap-10 px-2 lg:justify-center lg:col-span-2">
          <div>
            <p className="text-[#818799] text-[8px]">Find My Bike</p>
            <p className="text-[10px]">Theft Detection</p>
          </div>
          <div className="border-x-2  pl-2">
            <p className="text-[#818799] text-[8px]">AdaptivePower</p>
            <p className="text-[10px]">Automatic assistance</p>
          </div>
          <div>
            <p className="text-[#818799] text-[8px]">Cowboy Mobile Service</p>
            <p className="text-[10px]">At-home repairs</p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    {/* large screen end */}

    
  </>
);
};

export default Blackcycleinfo







