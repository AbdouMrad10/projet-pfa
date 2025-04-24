import React from 'react';

const CampaignCard = ({ imageSrc, title, content, percentage }) => {
  return (
    <div className="flex flex-col h-full shadow-custom-shadow">
      {/* Dynamic Image */}
      <img className="h-[250px] w-full object-cover" src={imageSrc} alt={title} />
      
      <div className="p-8 gap-7  flex flex-col items-start justify-between"  style={{ height: 'calc(100% - 250px)' }}>
        {/* Title */}
        <h2 className="font-montserrat font-medium text-[21px] leading-[36px] tracking-[-0.015em]">
          {title}
        </h2>
        
        {/* Content */}
        <p className="-mt-5 font-helvetica text-[#2C2C2CD8] font-normal text-[16px] leading-[25px] tracking-[-0.015em]">
          {content}
        </p>

        {/* Progress Bar */}
        <div className="w-full h-[8px] bg-Color2 rounded-full flex items-center justify-start gap-2">
          <div className="relative h-[8px] bg-Color5" style={{ width: `${percentage}%` }}>
            <span className="absolute top-[-6px] right-0 inline-block p-1 bg-Color5 text-white leading-4 font-poppins font-medium text-[15px] tracking-[-0.02em] text-center capitalize">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Donate Button */}
        <button className="font-poppins border-2 border-Color5 text-Color5 font-medium text-[17px] leading-[150%] tracking-[-0.02em] text-center flex items-center capitalize rounded-md py-2 px-14 justify-center w-full hover:bg-Color5 hover:text-white transition duration-300 ease-in-out self-center">
          Donate to campaign
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;
