import React from "react";
import "../App.css";

const Clients = () => {
  return (
    <div className="w-full flex justify-center  py-3 bg-white font-poppins">
      <div className="w-full text-center max-w-2xl ">
        <h1 className="pb-8 text-3xl">Our Clients</h1>
        <div class="flex flex-wrap justify-center gap-4 text-center">
          <img src="img/brands/1.png" className="w-20" alt="" />
          <img src="img/brands/2.png" className="w-20" alt="" />
          <img src="img/brands/3.png" className="w-20" alt="" />
          <img src="img/brands/4.png" className="w-20" alt="" />
          <img src="img/brands/5.png" className="w-20" alt="" />
          <img src="img/brands/6.png" className="w-20" alt="" />
          <img src="img/brands/7.png" className="w-20" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
