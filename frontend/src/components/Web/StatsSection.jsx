import React, { useState, useEffect, useRef } from 'react';
import { FaChild, FaHandsHelping, FaGift, FaGlobeAmericas } from 'react-icons/fa';

const StatsSection = () => {
  const [countStarted, setCountStarted] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { 
      value: 2500, 
      label: "Total Happy Children",
      icon: <FaChild className="w-10 h-10 mb-4 text-Color1" />
    },
    { 
      value: 270, 
      label: "Total Our Volunteer",
      icon: <FaHandsHelping className="w-10 h-10 mb-4 text-Color1" />
    },
    { 
      value: 3150, 
      label: "Our Products & Gifts",
      icon: <FaGift className="w-10 h-10 mb-4 text-Color1" />
    },
    { 
      value: 8700, 
      label: "Worldwide Donor",
      icon: <FaGlobeAmericas className="w-10 h-10 mb-4 text-Color1" />
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white py-6 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 ">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              countStarted={countStarted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ value, label, icon, countStarted }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const duration = 2000; // Animation duration in ms
  const increment = value / (duration / 16); // 60fps

  useEffect(() => {
    if (!countStarted) return;

    let startValue = 0;
    const animate = () => {
      startValue += increment;
      if (startValue < value) {
        setCurrentValue(Math.ceil(startValue));
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [countStarted, value, increment]);

  return (
    <div className=" py-8 flex flex-row gap-3 w-fit ">
      <div className="flex justify-center mt-2 ">
        {icon}
      </div>
      <div>
        <p className="font-poppins font-medium text-[24px] leading-[150%] tracking-[-0.02em] text-Color1">
          {currentValue.toLocaleString()}+
        </p>
        <p className="-mt-1 font-helvetica font-normal text-[16px] leading-[150%] tracking-[-0.02em] text-[#474747]">{label}</p>
      </div>
    </div>
  );
};

export default StatsSection;