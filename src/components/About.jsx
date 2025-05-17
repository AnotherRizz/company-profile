import React from "react";

const About = () => {
  return (
    <div className="font-poppins my-5">
      <h1 className="text-4xl text-center">About Us</h1>
      <div className=" w-full md:max-w-3xl  rounded-lg  mx-auto md:flex md:flex-row ">
        <div className="basis-1/2 bg-white">
          <img src="img/icons/about.png" alt="" />
        </div>
        <div className="basis-1/2 bg-white md:mt-10 -mt-10 px-7 md:px-1">
          <h1>Why Choose Us ?</h1>
          <p className="text-justify text-slate-600 text-sm">
            TechNova is a digital solutions provider committed to helping
            businesses thrive in the digital era. With a passion for innovation
            and excellence, we deliver reliable, user-focused technology
            tailored to your goals.{" "}
          </p>
          <p className="text-justify text-sky-600 text-sm">Innovation - Transparency - Collaboration - Growth - focused</p>
        </div>
      </div>
    </div>
  );
};

export default About;
