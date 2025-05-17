import React from "react";
import { MoveRight } from "lucide-react";

const Main = () => {
  return (
    <div className="w-full mt-20 md:mt-10  p-2 font-poppins overflow-hidden">
      <div class="md:flex flex-row relative">
        <div className="bg-sky-500 p-6 rounded-full h-34 w-34 hidden md:block  absolute left-24 top-10 opacity-80 blur-3xl"></div>
        <div class="md:basis-1/2 flex justify-start items-center ms-5 z-10  md:ms-20">
          <div>
            <p className=" text-slate-500 text-xl md:text-3xl">
              Digital Solutions for Your Business
            </p>
            <p className=" text-slate-500 text-xl md:text-3xl">We help businesses grow and innovate through custom technology solutions, tailored to your needs.  </p>
            <button className=" border border-sky-500 text-sky-500  py-1 px-4 text-sm items-center rounded-lg mt-4 flex gap-2">
              Get Started <MoveRight />
            </button>
          </div>
        </div>
        <div class="md:basis-1/2">
          <img src="img/icons/main.png" className="z-20 -mt-20" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Main;
