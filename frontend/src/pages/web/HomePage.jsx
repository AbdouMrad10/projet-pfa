import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import bg from '../../assets/bg.png';
import Rectangle from '../../assets/Rectangle.png';
import icon1 from '../../assets/icons/icon1.png';
import vector from '../../assets/icons/vector.png';
import line from '../../assets/line.png';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import CampaignCard from '../../components/Web/CampaignCard';
import img0 from '../../assets/grid/Rectangle.png';
import img1 from '../../assets/grid/Rectangle-1.png';
import img2 from '../../assets/grid/Rectangle-2.png';
import img3 from '../../assets/grid/Rectangle-3.png';
import img4 from '../../assets/grid/Rectangle-4.png';
import img5 from '../../assets/grid/Rectangle-5.png';
import img6 from '../../assets/grid/Rectangle-6.png';
import img7 from '../../assets/grid/Rectangle-7.png';
import Carousel from '../../components/Web/Carousel';
import img401 from '../../assets/images/img4.1.png';
import img402 from '../../assets/images/img4.2.png';
import img403 from '../../assets/images/img4.3.png';
import img404 from '../../assets/images/img4.4.png';
import bg2 from '../../assets/images/bg2.png';
import bg3 from '../../assets/images/bg3.png';
import ScrollToTop from '../../components/ScrollToTop';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import StatsSection from '../../components/Web/StatsSection';
import 'animate.css';

export const HomePage = () => {
  const [activeButton, setActiveButton] = useState('10$');
  
  // Intersection observers for each section
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [howItWorksRef, howItWorksInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [campaignsRef, campaignsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [joinUsRef, joinUsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [worldRef, worldInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storiesRef, storiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [supportRef, supportInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='relative'>
      <ScrollToTop />

      {/* Hero Section */}
      <section ref={heroRef} className='flex items-center justify-end bg-[#1D1D1D]'>
        <div className="relative flex items-center bg-cover bg-center bg-no-repeat min-h-[600px] w-[85%]" style={{ backgroundImage: `url(${bg})` }}>
          <div className="inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1D1D1D] before:via-[#1D1D1D]/70 before:w-[65%]"></div>
          <div className="ml-24 relative z-10 text-white p-10 mt-24 flex flex-col items-start justify-center gap-6">
            <h1 className={`${heroInView ? 'animate__animated animate__fadeInUp' : ''} font-montserrat font-semibold text-[32px] leading-[44px] tracking-[-0.015em]`}>
              Make a Difference, <br />One Donation at a Time.
            </h1>
            <p className={`${heroInView ? 'animate__animated animate__fadeInUp' : ''} font-[Helvetica] font-normal text-[18px] leading-[22px]`}>
              Donate goods, support a cause, <br />and let our transporters do the rest!
            </p>
            <button className={`${heroInView ? 'animate__animated animate__fadeIn' : ''} text-[#BF8C6F] font-poppins text-[16px] leading-[100%] tracking-[-0.015em] py-2 px-8 rounded mt-1 border-2 border-[#BF8C6F] hover:bg-[#BF8C6F] hover:text-white transition duration-300 ease-in-out`}>
              View Campaigns
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='container mx-auto px-20 flex items-center justify-center'>
        <StatsSection />
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className='flex items-center justify-end bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/60'>
        <div className="relative flex items-center justify-start bg-cover bg-center bg-no-repeat min-h-[600px] w-[75%]" style={{ backgroundImage: `url(${Rectangle})` }}>
          <div className="inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FFFFFF] before:via-[#FFFFFF]/80 before:w-[85%]"></div>
          <div className={`${missionInView ? 'animate__animated animate__zoomIn' : ''} relative z-10 pt-16 pb-12 flex flex-col gap-2 justify-center items-start lg:-ml-[200px] w-[50%]`}>
            <h1 className="font-rubik text-Color1 font-semibold text-[35px] leading-[44px] tracking-[-0.015em]">Our Mission & Goals</h1>
            <p className="font-robotor font-normal text-[#2C2C2CD8] w-[85%] text-[17px] leading-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae nulla tempore eius, ipsam voluptatum itaque impedit consequatur qui perferendis quo nisi obcaecati dicta magnam dolor blanditiis eos pariatur quae.
            </p>
            <div className='mt-8 grid gap-6 grid-cols-2 grid-rows-2'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='flex items-center justify-start gap-4'>
                  <div className='min-w-[75px] h-[75px] bg-Color2 flex items-center justify-center'>
                    <img src={icon1} alt="icon" />
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

      {/* How It Works Section */}
      <section ref={howItWorksRef} className='flex container p-8 mx-auto items-center justify-center my-12'>
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${howItWorksInView ? 'animate__animated animate__fadeIn' : ''} font-plusJakartaSans text-Color1 font-medium text-[48px] leading-[150%] tracking-[-0.02em]`}>
            How It Works
          </h1>
          <p className={`${howItWorksInView ? 'animate__animated animate__fadeIn' : ''} mb-16 font-plusJakartaSans font-normal text-[18px] leading-[150%] tracking-[0%] text-center text-[#000000E0] w-[40%] mt-4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
          <div className={`${howItWorksInView ? 'animate__animated animate__fadeIn' : ''} flex flex-row`}>
            {['Choose Location', 'Pick-up Date', 'Book Your Care'].map((step, index) => (
              <div key={index} className='flex flex-col items-center justify-start gap-5'>
                <div className='min-w-[90px] h-[90px] rounded-[30px] bg-[rgba(3,63,115,0.14)] flex justify-center items-center'>
                  <img className='w-[35px] h-[45px]' src={vector} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <h3 className="font-plusJakartaSans text-[#000000E0] font-semibold text-[24px] leading-[150%] tracking-[-0.02em]">
                    {step}
                  </h3>
                  <p className="font-plusJakartaSans text-[#000000E0] font-normal text-[14px] leading-[175%] tracking-[-0.02em] text-center w-[65%]">
                    Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.
                  </p>
                </div>
                {index < 2 && (
                  <img 
                    className='absolute h-[75px]' 
                    style={{ left: index === 0 ? '380px' : '', right: index === 1 ? '375px' : 'auto' }}
                    src={line} 
                    alt="" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section ref={campaignsRef} className='flex px-14 container mx-auto items-center justify-center mt-12 mb-20'>
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${campaignsInView ? 'animate__animated animate__zoomIn' : ''} font-plusJakartaSans text-Color1 font-medium text-[48px] leading-[150%] tracking-[-0.02em]`}>
            Featured Campaigns
          </h1>
          <div className={`${campaignsInView ? 'animate__animated animate__zoomIn' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10`}>
            <CampaignCard
              imageSrc={image1}
              title="Help Children in Need"
              content="Your donation helps provide food, education, and medical care."
              percentage={120}
            />
            <CampaignCard
              imageSrc={image2}
              title="Nemo enim ipsam"
              content="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              percentage={70}
            />
            <CampaignCard
              imageSrc={image3}
              title="Nemo enim ipsam"
              content="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              percentage={70}
            />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section ref={joinUsRef} style={{ backgroundImage: `url(${bg2})` , backgroundAttachment: 'fixed' }} className=' flex items-end justify-center bg-cover bg-center bg-no-repeat min-h-[450px] w-[100%] my-14'>
        <div className={`${joinUsInView ? 'animate__animated animate__fadeInLeft' : ''} mt-20 flex-col flex items-center justify-center mb-12`}>
          <p className='font-plusJakartaSans text-[#F3F4F6E8] font-normal text-[18px] leading-[150%] tracking-[0%] text-center'>
            Lorem ipsum dolor sit amet, consectetur a <br />
            dipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
          <h2 className='text-Color2 font-plusJakartaSans font-medium text-[48px] leading-[150%] tracking-[-2%] text-center'>
            Join Us & Make an Impact!
          </h2>
          <button className='text-Color2 font-poppins font-semibold text-[18px] leading-[100%] tracking-[-0.015em] py-3 px-8 rounded mt-4 border-2 border-Color2 hover:bg-Color2 hover:text-white transition duration-300 ease-in-out'>
            Join Us
          </button>
        </div>
      </section>

      {/* Works Across The World Section */}
      <section ref={worldRef} className='container mx-auto w-[60%]'>
        <h1 className={`${worldInView ? 'animate__animated animate__zoomIn' : ''} mb-12 text-Color1 font-rubik font-semibold text-[35px] leading-[50px] text-center`}>
          Works Across The World
        </h1>
        <div className="flex flex-col gap-3">
          {/* First Row */}
          <div className="flex flex-row gap-3">
            <div className={`${worldInView ? 'animate__animated animate__fadeInLeft' : ''} relative group w-[45%]`}>
              <img className="w-full h-full" src={img401} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.39)] via-[rgba(0,0,0,0.665678)] to-[rgba(0,0,0,0.86)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-start text-white px-8">
                <p className="bottom-16 text-[#F3F4F6E8] font-helvetica font-bold text-[18px] leading-[150%] absolute text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A short description of this image.
                </p>
                <a href="#" className="bottom-8 underline-offset-[6px] text-Color2 capitalize font-poppins font-medium text-[16px] leading-[150%] tracking-[-0.02em] absolute underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 flex items-center gap-7">
                  Learn more {">"}
                </a>
              </div>
            </div>

            <div className={`${worldInView ? 'animate__animated animate__fadeInRight' : ''} relative group w-[55%]`}>
              <img className="w-full h-full" src={img402} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.39)] via-[rgba(0,0,0,0.665678)] to-[rgba(0,0,0,0.86)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-start text-white px-8">
                <p className="bottom-16 text-[#F3F4F6E8] font-helvetica font-bold text-[18px] leading-[150%] absolute text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A short description of this image.
                </p>
                <a href="#" className="bottom-8 underline-offset-[6px] text-Color2 capitalize font-poppins font-medium text-[16px] leading-[150%] tracking-[-0.02em] absolute underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 flex items-center gap-7">
                  Learn more {">"}
                </a>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-row gap-3">
            <div className={`${worldInView ? 'animate__animated animate__fadeInLeft' : ''} relative group w-[60%]`}>
              <img className="w-full h-full" src={img403} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.39)] via-[rgba(0,0,0,0.665678)] to-[rgba(0,0,0,0.86)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-start text-white px-8">
                <p className="bottom-16 text-[#F3F4F6E8] font-helvetica font-bold text-[18px] leading-[150%] absolute text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A short description of this image.
                </p>
                <a href="#" className="bottom-8 underline-offset-[6px] text-Color2 capitalize font-poppins font-medium text-[16px] leading-[150%] tracking-[-0.02em] absolute underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 flex items-center gap-7">
                  Learn more {">"}
                </a>
              </div>
            </div>

            <div className={`${worldInView ? 'animate__animated animate__fadeInRight' : ''} relative group w-[40%]`}>
              <img className="w-full h-full" src={img404} alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.39)] via-[rgba(0,0,0,0.665678)] to-[rgba(0,0,0,0.86)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-start text-white px-8">
                <p className="bottom-16 text-[#F3F4F6E8] font-helvetica font-bold text-[18px] leading-[150%] absolute text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A short description of this image.
                </p>
                <a href="#" className="bottom-8 underline-offset-[6px] text-Color2 capitalize font-poppins font-medium text-[16px] leading-[150%] tracking-[-0.02em] absolute underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 flex items-center gap-7">
                  Learn more {">"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section ref={storiesRef} className='container mx-auto flex items-center justify-center mb-16 mt-24'>
        <div className='px-24 container'>
          <div className='flex items-center justify-center mb-10'>
            <div className='w-[50%] mt-24'>
              <h1 className={`${storiesInView ? 'animate__animated animate__fadeInUp' : ''} font-rubik font-semibold text-[40px] leading-[50px] tracking-normal align-middle text-Color1`}>
                Success Stories <br /> & Testimonials
              </h1>
              <p className={`${storiesInView ? 'animate__animated animate__fadeInUp' : ''} font-plusJakartaSans text-[#1A202C] text-[18px] font-normal leading-[150%] tracking-normal align-middle w-[90%] mt-4`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              </p>
            </div>

            <div className={`${storiesInView ? 'animate__animated animate__fadeInRight' : ''} flex items-center gap-4`}>
              <div className='flex flex-col gap-4'>
                <img className="shadow-img-shadow" src={img0} alt="" />
                <img className="shadow-img-shadow" src={img4} alt="" />
              </div>

              <div className='flex flex-col gap-4 mt-14'>
                <img className="shadow-img-shadow" src={img1} alt="" />
                <img className="shadow-img-shadow" src={img2} alt="" />
              </div>

              <div className="grid grid-rows-6 grid-flow-col gap-4">
                <img className="shadow-img-shadow w-full row-span-3 col-span-2 h-auto" src={img3} alt="" />
                <img className="shadow-img-shadow w-full row-span-2 col-span-1 h-auto" src={img5} alt="" />
                <img className="shadow-img-shadow w-full row-span-3 col-span-2 h-auto" src={img7} alt="" />
                <img className="shadow-img-shadow w-full row-span-2 col-span-1 h-auto row-end-4" src={img6} alt="" />
              </div>
            </div>
          </div>
          <Carousel />
        </div>
      </section>

      {/* Support Kids Section */}
      <section className='flex flex-row'>
        <div className='flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[500px] w-[50%]' style={{ backgroundImage: `url(${bg3})` }}>
        </div>
        <div ref={supportRef} className='bg-[#1D1D1D] flex items-center px-16 justify-start w-[50%]'>
          <div className={`${supportInView ? 'animate__animated animate__fadeInUp' : ''} flex flex-col w-[70%] py-28`}>
            <h1 className="font-rubik text-Color2 font-semibold text-[34px] leading-[132%] tracking-[-2%]">
              Support Kids by Raising Valuable Donations
            </h1>
            <p className="font-helvetica text-[#D3DCE7] font-normal text-[16px] leading-[150%] tracking-[-2%] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex flex-row gap-3 mt-6'>
              {['10$', '20$', '30$', '60$', '100$'].map((amount) => (
                <button
                  key={amount}
                  className={`h-[30px] w-[50px] font-poppins font-semibold text-[17px] leading-[150%] tracking-[-2%] text-center flex items-center justify-center capitalize transition-colors duration-300 ${
                    activeButton === amount ? 'bg-Color2' : 'text-[#FFFFFF] bg-[#DDE0E42E] hover:bg-Color2'
                  }`}
                  onClick={() => setActiveButton(amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
            <div className='mt-4 flex items-center justify-start gap-5'>
              <input
                type="text"
                placeholder="$ Custom Amount"
                className="bg-[#DDE0E42E] py-3 pl-5 w-[180px] h-fit text-[#FFFFFF4F] font-poppins font-medium text-[16px] leading-[150%] tracking-[-2%] capitalize"
              />
              <button className="border-2 cursor-pointer border-Color2 py-[10px] px-14 text-Color2 font-poppins font-medium text-[18px] rounded-md leading-[150%] tracking-[-2%] text-center flex items-center justify-center capitalize hover:bg-Color2 hover:text-[#1D1D1D] transition duration-300 ease-in-out">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};