import React, { useEffect, useState } from 'react';
import bg from '../../assets/bg.png';
import CampaignCard from '../../components/Web/CampaignCard'; // assuming you already have this component
import api from '../../config/axiosConfig';

export const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [statusFilter, setStatusFilter] = useState('active');
  const [currentPage, setCurrentPage] = useState(1);
  const campaignsPerPage = 6;

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await api.get('/api/admin/campaings'); // Update the URL based on your API
        const data = await response.data.data;
        setCampaigns(data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };
    fetchCampaigns();
  }, []);

  useEffect(() => {
    const filtered = campaigns.filter((c) => c.status === statusFilter);
    setFilteredCampaigns(filtered);
    setCurrentPage(1); // Reset to first page when status changes
  }, [campaigns, statusFilter]);

  const totalPages = Math.ceil(filteredCampaigns.length / campaignsPerPage);
  const indexOfLast = currentPage * campaignsPerPage;
  const indexOfFirst = indexOfLast - campaignsPerPage;
  const currentCampaigns = filteredCampaigns.slice(indexOfFirst, indexOfLast);

  return (
    <>
      {/* Hero Section */}
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


      {/* Campaigns Section */}
      <section className='container mx-auto'>
        <h1 className='font-montserrat font-medium text-[48px] leading-[72px] tracking-[-0.02em] text-center text-Color1 mt-16'>Featured Campaigns</h1>
        {/* Buttons */}
        <div className=' flex justify-center my-8 gap-4'>
          <button
            className={`px-4 py-2 rounded ${statusFilter === 'active' ? 'bg-Color5 text-[#ffffff]' : 'bg-[#BFAF9933] text-black'}`}
            onClick={() => setStatusFilter('active')}
          >
            Active Campaigns
          </button>
          <button
            className={`px-4 py-2 rounded ${statusFilter === 'completed' ? 'bg-Color5 text-[#ffffff]' : 'bg-[#BFAF9933] text-black'}`}
            onClick={() => setStatusFilter('completed')}
          >
            Completed Campaigns
          </button>
        </div>

        {/* Campaign Cards Grid */}
        <div className=' px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
          {currentCampaigns.map((campaign, index) => {
            const percentage = Math.min(
              Math.round((campaign.collectedQuantity / campaign.targetQuantity) * 100),
              100
            );
            return (
                <CampaignCard
                  key={index}
                  imageSrc={`http://localhost:5000${campaign.imageUrl}`} 
                  title={campaign.title}
                  content={
                    campaign.description.length > 70
                      ? campaign.description.substring(0, 70) + '...'
                      : campaign.description
                  }
                  percentage={percentage}
                  _id={campaign._id}
                />
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-center items-center my-10 '>

          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 ${
              currentPage === 1 ? 'hidden' : 'bg-[#BFAF9933] text-black'
            }`}
          >
              {'<'}
          </button>

          {/* Numbered Buttons */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1  ${
                currentPage === i + 1 ? 'bg-Color1 text-white' : 'bg-[#BFAF9933] text-black'
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 ${
              currentPage === totalPages ? 'hidden' : 'bg-[#BFAF9933] text-black  '
            }`}
          >
            {'>'}
          </button>
        </div>

    </section>
    </>
  );
};
