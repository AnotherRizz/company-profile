import React from 'react'

const Services = () => {
  return (
   <>
      <h1 className='text-4xl text-center mt-20 font-poppins'>What We Do</h1>
    <div className='w-full md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-8 font-poppins my-10'>
      <div className='bg-white rounded-lg p-4 shadow-lg   flex flex-col justify-center items-center'>
         <h1 className=' text-center text-sky-500'>Custom Software </h1>
        <img src="img/icons/software.png" className='w-1/3 md:w-2/3' alt="" />
        <p className='text-center text-slate-600 text-xs'>We build scalable and secure web and mobile applications tailored to your business</p>
      </div>
      <div className='bg-white rounded-lg p-4 shadow-lg   flex flex-col justify-center items-center'>
         <h1 className=' text-center text-sky-500'>IT Consulting </h1>
        <img src="img/icons/consul.png" className='w-1/3 md:w-2/3' alt="" />
        <p className='text-center text-slate-600 text-xs'>Strategic guidance to align your technology with business objectives</p>
      </div>
      <div className='bg-white rounded-lg p-4 shadow-lg   flex flex-col justify-center items-center'>
         <h1 className=' text-center text-sky-500'>UI/UX Design </h1>
        <img src="img/icons/ui.png" className='w-1/3 md:w-2/3' alt="" />
        <p className='text-center text-slate-600 text-xs'>Creating intuitive and delightful user experiences that convert</p>
      </div>
      <div className='bg-white rounded-lg p-4 shadow-lg   flex flex-col justify-center items-center'>
         <h1 className=' text-center text-sky-500'>System Integration</h1>
        <img src="img/icons/system.png" className='w-1/3 md:w-2/3' alt="" />
        <p className='text-center text-slate-600 text-xs'>We connect your tools and systems for seamless data flow and automation</p>
      </div>
    </div>
   </>
  )
}

export default Services
