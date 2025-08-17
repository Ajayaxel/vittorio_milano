import React, { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const Navbar = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    "Bespoke",
    "The Black Tie",
    "Made to Measure",
    "Ready to wear",
    "Indian Wedding",
    "Semi Bespoke",
    "Vittorio Club",
    "The Team",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex flex-col gap-1">
        {/* Row 1: Icons + Logo */}
        <div className="flex justify-between items-center mx-10 py-2">
          {/* Left Icons */}
          <div className="flex items-center gap-4">
            <ShoppingBag
              className={`w-6 h-6 cursor-pointer transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
            <Search
              className={`w-6 h-6 cursor-pointer transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
          </div>

          {/* Center Logo */}
          <div className="text-center flex-1">
  <img
    src="VM logo final-02.png"
    alt="Vittorio Milano"
    className="mx-auto transition"
    style={{
      height: "clamp(60px, 6vw, 60px)", // Adjust the size as needed
      objectFit: "contain",
      // optional: invert for white on transparent bg
    }}
  />
</div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X
                  className={`w-7 h-7 transition ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-7 h-7 transition ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Row 2: Links + CTA */}
        <div className="hidden md:flex items-center justify-between">
          <div
            className="flex flex-1 justify-center gap-[clamp(8px,1.2vw,24px)] font-medium"
            style={{ fontSize: "clamp(10px, 1.1vw, 16px)" }}
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className={`transition ${
                  scrolled
                    ? "text-black hover:text-gray-700"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Meet the Sartorial Director Button */}
          <button
            className={`font-semibold transition ml-6 ${
              scrolled
                ? "bg-[rgb(96,12,3)] text-yellow-400 hover:bg-[#3b0909]"
                : "bg-transparent text-white  "
            }`}
            style={{
              fontSize: "clamp(10px, 1.1vw, 16px)",
              padding: "clamp(4px, 0.6vw, 8px) clamp(8px, 1vw, 16px)",
              width: "clamp(150px, 20vw, 400px)",
            }}
          >
            Meet the Sartorial Director
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-800 text-base hover:text-black transition"
            >
              {item}
            </a>
          ))}
          <button className="w-full border border-none bg-[#4C0B0B] text-yellow-400 font-semibold px-4 py-2 rounded-sm  ">
            Meet the Sartorial Director
          </button>
        </div>
      )}
    </nav>
  );
});

export default Navbar;
