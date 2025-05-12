import React, { useState } from 'react';
import member0 from '../../assets/membre0.jpg';
import bg from '../../assets/bg.png';
import Rectangle from '../../assets/Rectangle.png';
import icon1 from '../../assets/icons/icon1.png';
import coeur from '../../assets/coeur.jpg'
import avatar from '../../assets/avatar.png'
import { FaFacebookF , FaInstagram , FaTwitter } from 'react-icons/fa';

export const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='flex items-center justify-end bg-[#1D1D1D]'>
        <div className="relative flex items-center bg-cover bg-center bg-no-repeat min-h-[400px] w-[85%]" style={{ backgroundImage: `url(${bg})` , backgroundPositionY:'bottom' }}>
          <div className="inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1D1D1D] before:via-[#1D1D1D]/70 before:w-[65%]"></div>
          <div className="ml-20 relative z-10 text-white   flex flex-col items-start justify-center gap-6 self-end mb-14">
            <h1 className= 'font-montserrat font-bold text-4xl leading-[44px] tracking-[-0.015em] text-Color2 capitalize'>
              Donate to campaign
            </h1>
            <p className=' font-helvetica font-normal text-[18px] leading-[22px] tracking-[-0.015em] text-[#D9D9D9]' >
              Donate goods, support a cause, <br />and let our transporters do the rest!
            </p>
          </div>
        </div>
      </section>

      <section className='container px-22  mx-auto flex flex-row items-center justify-center p-14 gap-12'>
        <div className='w-[50%]'>
          <img src={coeur} alt="coeur" className='h-fit w-full' />
        </div> 
        <div className='w-[35%] flex flex-col gap-4 '>
          <h2 className='font-rubik font-semibold text-[35px] leading-[50px] tracking-[0%] text-Color1'>Who Are We</h2>
          <p className='text-[#2C2C2CD8] font-helvetica font-normal text-[17px] leading-[1.5] tracking-[-0.34px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, <br /> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <div className='flex gap-4'>
            <img src={avatar} alt="" />
            <div>
              <h4 className='font-poppins font-bold  text-[16px] leading-[22px] tracking-[0em] text-[#0000000]'>Sponge Bob</h4>
              <span className='font-poppins font-light text-[16px] leading-[22px] tracking-[0em] text-[#2C2C2CD8]'>president</span>
            </div>
          </div>
        </div>     
      </section>

      {/* Mission Section */}
      <section className='flex items-center justify-end bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/60'>
        <div className="relative flex items-center justify-start bg-cover bg-center bg-no-repeat min-h-[600px] w-[75%]" style={{ backgroundImage: `url(${Rectangle})` }}>
          <div className="inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FFFFFF] before:via-[#FFFFFF]/80 before:w-[85%]"></div>
          <div className='relative z-10 pt-16 pb-12 flex flex-col gap-2 justify-center items-start lg:-ml-[200px] w-[50%]'>
            <h1 className="font-rubik text-Color1 font-semibold text-[35px] leading-[44px] tracking-[-0.015em]">Our Mission & Goals</h1>
            <p className="font-robotor font-normal text-[#2C2C2CD8] w-[85%] text-[17px] leading-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae nulla tempore eius, ipsam voluptatum itaque impedit consequatur qui perferendis quo nisi obcaecati dicta magnam dolor blanditiis eos pariatur quae.
            </p>
            <div className='mt-8 grid gap-6 grid-cols-2 grid-rows-2'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='flex items-center justify-start gap-4'>
                  <div className='min-w-[75px] h-[75px] bg-Color2 flex items-center justify-center'>
                    <img src={icon1} alt="icon"/>
                  </div>
                  <div className='flex flex-col items-start justify-start'>
                    <h3 className='font-poppins font-medium text-[17px] leading-[150%] tracking-[-0.02em]'>Quick Fundraise</h3>
                    <p className='font-[Helvetica] font-normal text-[14px] leading-[150%] tracking-[-0.02em] text-[#474747]'>Embarrassing hidden in the generators on the Internet</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
<section className="container mx-auto p-14">
  <div className="flex flex-col items-center gap-6">
    {/* Title */}
    <h2 className="font-rubik font-semibold text-[35px] leading-[50px] tracking-[-0.015em] text-Color1 text-center">Volunteers: Our Precious Assets</h2>
  </div>

  {/* Grid of Volunteer Photos */}
  <div className="flex flex-row items-center justify-center w-full py-12 px-24 container mx-auto  gap-4">
    <div className="flex flex-row items-center justify-center w-full">
      <div className="relative group  overflow-hidden">
        {/* Image */}
        <img src={member0} alt="" className="w-full h-fit object-cover" />

        {/* First gradient - always visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.49)] to-[rgba(0,0,0,0.66)] z-10"></div>

        {/* Second gradient + content - only on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.27)] via-[rgba(0,0,0,0.54)] to-[rgba(0,0,0,0.71)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center text-white px-8">
          <div className="absolute bottom-24 flex space-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaFacebookF className="text-white text-lg cursor-pointer" />
            <FaTwitter className="text-white text-lg cursor-pointer" />
            <FaInstagram className="text-white text-lg cursor-pointer" />
          </div>
        </div>

        {/* Name and Role - always visible at the bottom */}
        <div className="absolute bottom-4 left-0 w-full z-30 text-white text-center gap-1 flex flex-col items-center">
          <h4 className="font-helvetica font-normal text-[22px] leading-[25px] tracking-normal text-center text-[#FFFFFF]">Arya Stark</h4>
          <p className="text-[#ffffffbd] font-helvetica font-normal text-[15px] leading-[25px] tracking-normal text-center ">Engineer</p>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center justify-center w-full">
  <div className="relative group overflow-hidden">
    {/* Image */}
    <img src={member0} alt="" className="w-full h-fit object-cover" />

    {/* First gradient - always visible */}
    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.49)] to-[rgba(0,0,0,0.66)] z-10"></div>

    {/* Second gradient + content - only on hover */}
    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.27)] via-[rgba(0,0,0,0.54)] to-[rgba(0,0,0,0.71)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center text-white px-8">
      <div className="absolute bottom-24 flex space-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaFacebookF className="text-white text-lg cursor-pointer" />
        <FaTwitter className="text-white text-lg cursor-pointer" />
        <FaInstagram className="text-white text-lg cursor-pointer" />
      </div>
    </div>

    {/* Name and Role - always visible at the bottom */}
    <div className="absolute bottom-4 left-0 w-full z-30 text-white text-center gap-1 flex flex-col items-center">
      <h4 className="font-helvetica font-normal text-[22px] leading-[25px] tracking-normal text-center text-[#FFFFFF]">Arya Stark</h4>
      <p className="text-[#ffffffbd] font-helvetica font-normal text-[15px] leading-[25px] tracking-normal text-center ">Engineer</p>
    </div>
  </div>
    </div>

    <div className="flex flex-row items-center justify-center w-full">
      <div className="relative group  overflow-hidden">
        {/* Image */}
        <img src={member0} alt="" className="w-full h-fit object-cover" />

        {/* First gradient - always visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] via-[rgba(0,0,0,0.49)] to-[rgba(0,0,0,0.66)] z-10"></div>

        {/* Second gradient + content - only on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.27)] via-[rgba(0,0,0,0.54)] to-[rgba(0,0,0,0.71)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center text-white px-8">
          <div className="absolute bottom-24 flex space-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaFacebookF className="text-white text-lg cursor-pointer" />
            <FaTwitter className="text-white text-lg cursor-pointer" />
            <FaInstagram className="text-white text-lg cursor-pointer" />
          </div>
        </div>

        {/* Name and Role - always visible at the bottom */}
        <div className="absolute bottom-4 left-0 w-full z-30 text-white text-center gap-1 flex flex-col items-center">
          <h4 className="font-helvetica font-normal text-[22px] leading-[25px] tracking-normal text-center text-[#FFFFFF]">Arya Stark</h4>
          <p className="text-[#ffffffbd] font-helvetica font-normal text-[15px] leading-[25px] tracking-normal text-center ">Engineer</p>
        </div>
      </div>
    </div>
    </div>
</section>





    </>
  )
}