import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaArrowDown } from "react-icons/fa";

const Navbar = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

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

  const subcategories = {
    Bespoke: [
      { label: "Bespoke Shirts", link: "/bespoke/shirts" },
      { label: "Bespoke Trousers", link: "/bespoke/trousers" },
      { label: "Bespoke Shooting Wear", link: "/bespoke/shooting" },
      { label: "Bespoke Golf Wear", link: "/bespoke/golf" },
    ],
    "The Black Tie": [
      { label: "Tuxedos", link: "/black-tie/tuxedos" },
      { label: "Wedding Groom Suits", link: "/black-tie/groom" },
      { label: "Tuxedo Accessories", link: "/black-tie/accessories" },
    ],
    "Made to Measure": [
      { label: "Made-To-Measure Suits", link: "/made-to-measure/suits" },
      { label: "Made-To-Measure Shirts", link: "/made-to-measure/shirts" },
      { label: "Made-To-Measure Trousers", link: "/made-to-measure/trousers" },
      { label: "Corporate Packages", link: "/made-to-measure/corporate" },
      { label: "Executive Packages", link: "/made-to-measure/executive" },
      { label: "Dapper's Signature", link: "/made-to-measure/signature" },
    ],
"Ready to wear": [
  { label: "Curated Collections", link: "/ready-to-wear/curated-collections" },
  { label: "Vittorio Milano x Tuscany", link: "/ready-to-wear/vittorio-tuscany" },
  { label: "Shirts", link: "/ready-to-wear/shirts" },
  { label: "Jackets & Outer wear", link: "/ready-to-wear/outerwear" },
],

"Indian Wedding": [
  { label: "Sherwanis", link: "/indian-wedding/sherwanis" },
  { label: "Bandhgalas", link: "/indian-wedding/bandhgalas" },
  { label: "Kurta Sets", link: "/indian-wedding/kurta" },
  { label: "Vittorio Milano X Darbaré", link: "/indian-wedding/vittorio-darbare" },
  { label: "Shop by Occasion", link: "/indian-wedding/occasion" },
  { label: "Roka", link: "/indian-wedding/roka" },
  { label: "Mehndi", link: "/indian-wedding/mehndi" },
  { label: "Sangeet & Cocktail", link: "/indian-wedding/sangeet-cocktail" },
  { label: "Pheras", link: "/indian-wedding/pheras" },
  { label: "Accessories", link: "/indian-wedding/accessories" },
  { label: "Indian Shoes", link: "/indian-wedding/shoes" },
],

    "Semi Bespoke": [
      { label: "Vittorio Milano Semi-Bespoke Suits", link: "/semi-bespoke/suits" },
      
    ],
"Vittorio Club": [
  { label: "Exclusive Membership", link: "/vittorio-club/membership" },
  { label: "Events", link: "/vittorio-club/events" },
  { label: "Perks", link: "/vittorio-club/perks" },
  { label: "Sartoria - Entry Tier", link: "/vittorio-club/sartoria" },
  { label: "Maestro - Middle Tier", link: "/vittorio-club/maestro" },
  { label: "Connoisseur - Elite Tier", link: "/vittorio-club/connoisseur" },
],

    "The Team": [
      { label: "Vittorio Milano Team", link: "/team/designers" },
      { label: "Meet the founders", link: "/team/story" },
    
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <nav
        ref={ref}
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="flex flex-col gap-1">
          {/* Row 1: Icons + Logo */}
          <div className="flex justify-between items-center mx-10 py-2">
            {/* Center Logo */}
            <div className="text-center flex-1">
              <div
                className={`mx-auto transition font-bold ${
                  scrolled ? "text-black" : "text-white"
                }`}
                style={{
                  fontSize: "clamp(24px, 4vw, 32px)",
                  height: "clamp(60px, 6vw, 80px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="VM logo final-02.png" alt="" className="lg:h-[130px] md:h-[100px] sm:h-[80px] h-[60px] " />
              </div>
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
          <div className="hidden md:flex items-center justify-between relative">
            <div
              className="flex flex-1 justify-center gap-[clamp(8px,1.2vw,24px)] font-medium"
              style={{ fontSize: "clamp(10px, 1.1vw, 16px)" }}
            >
              {navLinks.map((item) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <a
                    href="#"
                    className={`transition ${
                      scrolled
                        ? "text-black hover:text-gray-700"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    {item}
                  </a>

                  {/* Bespoke Mega Menu */}
                  {item === "Bespoke" && hovered === "Bespoke" && (
                    <div 
                      className="absolute ml-[100px] left-1/2 transform -translate-x-1/2 top-full bg-white shadow-xl border border-gray-200 rounded-lg "
                      style={{ width: "800px", zIndex: 1000 }}
                    >
                      {/* Dashed line with arrows */}
                      <div className="relative">
                        <div className="border-t-2 border-dashed mt-4 border-gray-400 mx-6"></div>
                        {/* Arrow pointing down at Bespoke position */}
                        <div className="absolute -top-0 left-[12%] transform -translate-x-1/2">
                            <FaArrowDown />
                        </div>
                        {/* Additional arrows for visual balance */}
                        <div className="absolute -top-0 left-[36%]">
                         <FaArrowDown />
                        </div>
                        <div className="absolute -top-0 left-[60%]">
                          <FaArrowDown />
                        </div>
                     
                      </div>

                      {/* Content Grid */}
                      <div className="px-8 py-6 grid grid-cols-4 gap-8">
                        {/* Column 1 - Bespoke Suits */}
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2">
                            Bespoke Suits
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                Bespoke Shirts
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                Bespoke Trousers
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                Bespoke Shooting Wear
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                Bespoke Golf Wear
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Column 2 - Bespoke Womens wear */}
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2">
                            Bespoke Womens wear
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                W Bespoke Suits
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                W Bespoke Shirts
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                W Bespoke Trousers
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Column 3 - VM 9-Step Process */}
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2">
                            VM 9-Step Process
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                Garments Care
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                The Moving Tailor
                              </a>
                            </li>
                            <li>
                              <a href="#" className="hover:text-black transition-colors">
                                Speak to the stylist
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Column 4 - Image and Text */}
                        <div className="flex flex-col items-center text-center">
                          <div className="w-full h-32  rounded-lg mb-4 flex items-center justify-center">
                          <img src="https://www.shutterstock.com/image-photo/interior-mens-clothing-store-style-600nw-2016616760.jpg" alt="" />
                          </div>
                          <p className="text-sm font-medium text-gray-800 leading-relaxed">
                            Elevate your wardrobe with our stylists
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Default Dropdowns for others */}
                  {item !== "Bespoke" && subcategories[item] && hovered === item && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-56 mt-2">
                      {subcategories[item].map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Meet the Sartorial Director Button */}
            <button
              className={`font-semibold transition ml-6 rounded ${
                scrolled
                  ? "bg-[rgb(96,12,3)] text-yellow-400 hover:bg-[#3b0909]"
                  : "bg-transparent text-white  hover:bg-white hover:text-black"
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
              <div key={item}>
                <a
                  href="#"
                  className="block text-gray-800 text-base hover:text-black transition"
                >
                  {item}
                </a>
                {subcategories[item] && (
                  <div className="ml-4 mt-2 space-y-2">
                    {subcategories[item].map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.link}
                        className="block text-gray-600 text-sm hover:text-black transition"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full border border-none bg-[#4C0B0B] text-yellow-400 font-semibold px-4 py-2 rounded-sm">
              Meet the Sartorial Director
            </button>
          </div>
        )}
      </nav>


    </div>
  );
});

export default Navbar;




