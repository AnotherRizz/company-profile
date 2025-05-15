import React from "react";
import { MoveRight } from "lucide-react";

const Main = () => {
  return (
    <div className="w-full h-dvh  max-h-screen  p-2 font-poppins overflow-hidden">
      <div class="md:flex flex-row relative">
        <div className="bg-sky-500 p-6 rounded-full h-34 w-34 hidden md:block  absolute right-24 top-20 opacity-80 blur-3xl"></div>
        <div class="md:basis-1/2">
          <img src="img/icons/main.png" className="z-20" alt="" />
        </div>
        <div class="md:basis-1/2 flex justify-start items-center ms-5">
          <div>
            <h1 className=" font-extrabold text-7xl text-sky-500">TechNova</h1>
            <p className="text-sm text-slate-500 ">
              Digital Solutions for Your Business
            </p>
            <button className=" border border-sky-500 text-sky-500  py-1 px-4 rounded-lg mt-4 flex gap-2">
              Get Started <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
