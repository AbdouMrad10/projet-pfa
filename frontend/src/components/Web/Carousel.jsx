import React, { useRef, useState, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Star } from "lucide-react";
import "../../App.css"; // Import your CSS file for custom styles
const Carousel = () => {
  const splideRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState(0);

  const testimonials = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.8,
      text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.9,
      text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Sarah Connor",
      location: "Los Angeles, USA",
      rating: 4.7,
      text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      name: "Mohammed Ali",
      location: "Cairo, Egypt",
      rating: 4.6,
      text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        name: "Mohammed Ali",
        location: "Cairo, Egypt",
        rating: 4.6,
        text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        name: "Mohammed Ali",
        location: "Cairo, Egypt",
        rating: 4.6,
        text: "“ow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        name: "Mohammed Ali",
        location: "Cairo, Egypt",
        rating: 4.6,
        text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        name: "Mohammed Ali",
        location: "Cairo, Egypt",
        rating: 4.6,
        text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
      }
  ];

  // Calculate groups with overlap for pagination
  const calculateGroups = () => {
    const groups = [];
    const totaltestimonials = testimonials.length;
    
    for (let i = 0; i < totaltestimonials; i += 3) {
      if (i + 3 >= totaltestimonials && totaltestimonials % 3 !== 0) {
        groups.push({
          start: Math.max(totaltestimonials - 3, 0),
          end: totaltestimonials - 1
        });
        break;
      }
      groups.push({
        start: i,
        end: Math.min(i + 2, totaltestimonials - 1)
      });
    }
    
    return groups;
  };

  const groups = calculateGroups();

  // Handle testimonial change
  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;
      splideInstance.on("move", (newIndex) => {
        const currentGroup = groups.findIndex(group => 
          newIndex >= group.start && newIndex <= group.end
        );
        if (currentGroup !== -1) {
          setActiveGroup(currentGroup);
        }
      });
    }
  }, [groups]);

  // Go to specific group
  const goToGroup = (groupIndex) => {
    if (splideRef.current) {
      splideRef.current.splide.go(groups[groupIndex].start);
    }
  };

  return (
    <div className="animate__animated  animate__zoomIn container mx-auto relative">
      <Splide
        ref={splideRef}
        hasTrack={false}
        options={{
          type: "loop",
          perPage: 3,
          gap: "2rem",
          pagination: false,
          arrows: false,
          autoplay: false,
          breakpoints: {
            1024: {
              perPage: 2,
            },
            768: {
              perPage: 1,
            }
          },

        }}
      >
        <SplideTrack style={{ padding: "10px" }}>
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <div className="bg-[#BFAF9961] rounded-lg shadow-custom-shadow2 p-6  flex flex-col mb-3">
                {/* User info with avatar */}
                <div className="flex  mb-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start ">
                    <h3 className=" text-[#000000CC]  font-rubik font-medium text-[18px]  tracking-normal space-y-[5px] text-center align-middl">{testimonial.name}</h3>
                    <p className="-mt-1 font-rubik font-normal text-[14px]  text-[#000000CC]  tracking-normal space-y-[5px] text-center align-middle">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <span className="font-bold mr-1">{testimonial.rating}</span>
                    <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                  </div>
                </div>
                
                {/* Testimonial text */}
                <p className="font-rubik font-normal text-[#000000CC] text-[15px] leading-[25px] align-middle">"{testimonial.text}"</p>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>

      {/* Custom Controls */}
      <div className="flex justify-between px-3 ">
        {/* Custom Pagination */}
        <div className="flex justify-start items-start mt-4 space-x-4">
          {groups.map((_, groupIndex) => {
            const isActive = groupIndex === activeGroup;

            return (
              <button
                key={groupIndex}
                onClick={() => goToGroup(groupIndex)}
                className={`h-3 rounded-full transition-all ${
                  isActive ? "bg-Color1 w-12" : "w-3 bg-[#DDE0E4]"
                }`}
              />
            );
          })}
        </div>

        {/* Custom Arrows */}
        <div className="flex space-x-16">
          {/** make the arrow disabled when the final group is == 0 */}


{/* Custom Arrows */}
<div className="flex space-x-16 -mr-1 ">
  <button
    className={` ${activeGroup === 0 ? " text-[#486284] cursor-not-allowed" : "text-Color1"}`}
    onClick={() => goToGroup(activeGroup - 1)}
    disabled={activeGroup === 0}
  >
    <FaArrowLeft size={22} />
  </button>

  <button
    className={` ${activeGroup === groups.length - 1 ? "text-[#486284] cursor-not-allowed" : "text-Color1"}`}
    onClick={() => goToGroup(activeGroup + 1)}
    disabled={activeGroup === groups.length - 1}
  >
    <FaArrowRight size={22} />
  </button>
</div>


        </div>
      </div>
    </div>
  );
};

export default Carousel;

