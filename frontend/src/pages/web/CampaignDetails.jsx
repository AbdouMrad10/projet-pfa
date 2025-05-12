import React, { useState } from 'react';
import bg from '../../assets/bg.png'; // Image de fond pour la section principale

export const CampaignDetails = () => {
    const [activeButton, setActiveButton] = useState('10$');
  
  return (
    <>

      <section className='flex items-center justify-end bg-[#1D1D1D]'>
        <div
          className="relative flex items-center bg-cover bg-center bg-no-repeat min-h-[400px] w-[85%]"
          style={{ backgroundImage: `url(${bg})`, backgroundPositionY: 'bottom' }}
        >
          <div className="inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1D1D1D] before:via-[#1D1D1D]/70 before:w-[65%]"></div>
          <div className="ml-20 relative z-10 text-white flex flex-col items-start justify-center gap-6 self-end mb-14">
            <h1 className='font-montserrat text-Color2 font-semibold text-[32px] leading-[44px] tracking-[-0.015em] capitalize'>
              Donate to campaign
            </h1>
            <p className='font-helvetica text-[#D9D9D9] font-normal text-[18px] leading-[22px] tracking-[-0.015em]'>
              Donate goods, support a cause, <br />and let our transporters do the rest!
            </p>
          </div>
        </div>
      </section>

    <section className="container mx-auto px-24 my-8">
      {/* Section principale */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Partie gauche : Image et contenu */}
        <div className="w-2/3 h-fit  shadow-custom-shadow2  bg-[#FFFFFF]  ">
          {/* Image */}
          <img src={bg} alt="Challenge Image" className="w-full h-[400px] object-cover mb-4" />

          {/* Titre */}
          <h2 className="text-2xl font-bold mb-2 px-8">Nemo enim ipsam</h2>

        {/* Progress Bar */}
        <div className="w-full px-8 my-4 ">
        <div className="w-full  h-[8px] bg-Color2 rounded-full flex items-center justify-start gap-2">
          <div className="relative h-[8px] bg-Color5" style={{ width: `${70}%` }}>
            <span className="absolute top-[-6px] right-0 inline-block p-1 bg-Color5 text-white leading-4 font-poppins font-medium text-[15px] tracking-[-0.02em] text-center capitalize">
              {70}%
            </span>
          </div>
        </div>
        </div>

          {/* Contenu */}
          <p className="text-gray-700 px-8 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum fringilla, dolor eget viverra pretium. Donec tellus aliquet, vitae ultricies euismod euismod est eu lectus. Vestibulum non justo consectetur, cursus ante, tristique sapien. Nulla quis diam sit amet turpis interdum erat. Vivamus faucibus ex sed nisl nunc elementum. Mauris et bibendum du.
          </p>

          {/* Sous-titre */}
          <h3 className="text-xl font-bold mb-2 px-8">Our challenge</h3>

          {/* Paragraphe supplémentaire */}
          <p className="text-gray-700 mb-4 px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum fringilla, dolor eget viverra pretium. Donec tellus aliquet, vitae ultricies euismod euismod est eu lectus. Vestibulum non justo consectetur, cursus ante, tristique sapien. Nulla quis diam sit amet turpis interdum erat. Vivamus faucibus ex sed nisl nunc elementum. Mauris et bibendum du.
          </p>
        </div>

        {/* Partie droite : Formulaire de don */}
        <div className="w-1/3 shadow-custom-shadow2 h-fit bg-[#FFFFFF] shadow-md p-6">
          {/* Titre */}
          <h2 className="font-montserrat font-medium text-[24px] leading-[36px] tracking-[-0.015em] mb-4">Make a Difference</h2>

          <div className='flex flex-row gap-3 mt-6 '>
              {['10$', '20$', '30$', '60$', '100$'].map((amount) => (
                <button
                  key={amount}
                  className={`h-[30px] w-[50px] font-poppins font-semibold text-[17px] leading-[150%] tracking-[-2%] text-center flex items-center justify-center capitalize transition-colors duration-300 ${
                    activeButton === amount ? 'bg-Color2' : 'text-[#000000BF] bg-[#E5E5E5] hover:bg-Color2'
                  }`}
                  onClick={() => setActiveButton(amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
            <div className='mt-4 flex items-center justify-start gap-5 mb-4'>
              <input
                type="text"
                placeholder="$ Custom Amount"
                className="bg-[#E5E5E5] py-3 px-4 pl-5 w-[170px] h-fit text-[#2C2C2C61] font-poppins font-medium text-[16px] leading-[150%] tracking-[-2%] capitalize"
              />
              <button className="border-2 cursor-pointer border-Color3 py-[10px] px-2 w-full text-Color3 font-poppins font-medium text-[15px] rounded-md leading-[150%] tracking-[-2%] text-center flex items-center justify-center capitalize hover:bg-Color3 hover:text-[#FFFFFF] transition duration-300 ease-in-out">
                Donate Now
              </button>
            </div>
            <p className='text-[#2C2C2CD8] font-helvetica font-normal text-[16px] leading-[25px] tracking-[-0.015em] mb-[18px]'>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

          <form>
            <input type="text" id="name" placeholder="Name" className="w-full px-4 py-2   rounded-lg mb-4 bg-[#E5E5E5A3]" />

            <input type="tel" id="phone" placeholder="Phone Number" className="w-full px-4 py-2  rounded-lg mb-4 bg-[#E5E5E5A3]" />

            <input id="address" type="text"  placeholder="Address" className="w-full px-4 py-2   rounded-lg mb-4 bg-[#E5E5E5A3]"/>

            <textarea id="whatWillYouDonate" placeholder="What Will You Donate" rows="3" className="w-full px-4 py-2   rounded-lg mb-4 bg-[#E5E5E5A3]"></textarea>

            <button className="font-poppins border-2 border-Color5 text-Color5 font-medium text-[17px] leading-[150%] tracking-[-0.02em] text-center flex items-center capitalize rounded-md py-2 px-14 justify-center w-full hover:bg-Color5 hover:text-white transition duration-300 ease-in-out self-center">
              Donate to campaign
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};