import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

const SidebarContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);

    const handleResize = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar ref={navRef} />

      <div
        className="fixed  transition-transform duration-500 flex"
        style={{
          top: `${navHeight}px`,
          right: 0,
          height: "auto",
          transform: isOpen ? "translateX(0)" : "translateX(calc(100% - 40px))",
        }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Vertical Contact Tab - Always Visible */}
        <div className="w-10 bg-[rgb(96,12,3)] hover:border-[rgb(96,12,3)] hover:border-[1px] text-white flex items-center justify-center cursor-pointer">
  <span className="transform -rotate-90 tracking-widest text-yellow-400 text-xs md:text-sm font-medium whitespace-nowrap">
    CONTACT US
  </span>
</div>


        {/* Sidebar Content */}
        <div
          className="bg-[rgb(96,12,3)] text-white 
                     w-[clamp(200px,22vw,400px)] 
                     p-3 md:p-4 pb-2 shadow-lg 
                     transform transition-transform duration-500 ease-in-out"
        >
          {/* Phone */}
          <div className="flex justify-between items-center border-b border-white/30 py-2 md:py-3">
            <span className="text-xs sm:text-sm md:text-base">+44 xxxxxxxxx</span>
            <span className="text-sm md:text-base">📞</span>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center border-b border-white/30 py-2 md:py-3">
            <span className="text-xs sm:text-sm md:text-base">shop@vittorimilano.com</span>
            <span className="text-sm md:text-base">✉️</span>
          </div>

          {/* Book appointment */}
          <div className="flex justify-between items-center border-b border-white/30 py-2 md:py-3">
            <span className="text-xs sm:text-sm md:text-base">BOOK AN APPOINTMENT</span>
            <span className="text-sm md:text-base">💬</span>
          </div>

          {/* Newsletter */}
          <div className="py-2 md:py-3">
            <p className="text-xs sm:text-sm mb-2">Sign up to our newsletter</p>
            <div className="flex gap-1">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-2 py-1 md:py-2 text-xs sm:text-sm text-black outline-none"
              />
              <button className="bg-transparent border px-2 md:px-3 text-sm">
                ➝
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarContact;
