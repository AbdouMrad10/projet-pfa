import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollPercentage(scrolled);
      
      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-9 right-6 h-14 w-14 rounded-full flex items-center justify-center  bg-transparent shadow-lg cursor-pointer transition-all duration-300 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      onClick={scrollToTop}
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50" cy="50" r="45"
          fill="none" stroke="#e0e0e0" strokeWidth="6"
        />
        <circle
          cx="50" cy="50" r="45"
          fill="none" stroke='#033F73' strokeWidth="6"
          strokeDasharray="283"
          strokeDashoffset={`${283 - (scrollPercentage / 100) * 283}`}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <span className="absolute text-Color1 font-bold text-sm"></span>
      <svg
        className="w-7 h-7 text-Color1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
  );
};

export default ScrollToTop;