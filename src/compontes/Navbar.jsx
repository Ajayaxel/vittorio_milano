

// Updated Navbar.js
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <nav
        ref={ref}
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="flex flex-col gap-1">
          {/* Row 1: Icons + Logo */}
          <div className="flex justify-between items-center mx-10 py-2">
            {/* Center Logo */}
            <div className="text-center flex-1">
              <Link to="/">
                <div
                  className={`mx-auto transition font-bold ${scrolled ? "text-black" : "text-white"
                    }`}
                  style={{
                    fontSize: "clamp(24px, 4vw, 32px)",
                    height: "clamp(60px, 6vw, 80px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="VM logo final-02.png"
                    alt=""
                    className="lg:h-[130px] md:h-[100px] sm:h-[80px] h-[60px]"
                  />
                </div>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className={`w-7 h-7 transition ${scrolled ? "text-black" : "text-white"}`} />
                ) : (
                  <Menu className={`w-7 h-7 transition ${scrolled ? "text-black" : "text-white"}`} />
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
                    className={`transition ${scrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
                      }`}
                  >
                    {item}
                  </a>

                  {/* Bespoke Mega Menu */}
                  {item === "Bespoke" && hovered === "Bespoke" && (
                    <div
                      className="absolute 
                        top-full 
                        bg-white shadow-xl border border-gray-200 rounded-lg
                        w-[600px] max-w-[95vw] md:max-w-[90vw]
                        px-6
                        sm:mx-[100px] md:mx-[200px] lg:mx-[300px]
                        left-[30%] md:left-[60%] lg:left-[20%] sm:left-[10%] transform -translate-x-1/2"
                      style={{ zIndex: 1000 }}
                    >
                      {/* Dashed line */}
                      <div className="border-t-2 border-dashed mt-4 border-gray-400 mx-6"></div>

                      {/* Content Grid */}
                      <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Column 1 */}
                        <div className="text-center relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                            <FaArrowDown />
                          </div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2">
                            Bespoke Suits
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li><Link to="/bespoke/shirts" className="hover:text-black transition-colors">Bespoke Shirts</Link></li>
                            <li><Link to="/bespoke/trousers" className="hover:text-black transition-colors">Bespoke Trousers</Link></li>
                            <li><Link to="/bespoke/shooting" className="hover:text-black transition-colors">Bespoke Shooting Wear</Link></li>
                            <li><Link to="/bespoke/golf" className="hover:text-black transition-colors">Bespoke Golf Wear</Link></li>
                          </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="text-center relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                            <FaArrowDown />
                          </div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2">
                            Bespoke Womens wear
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li><Link to="/bespoke/women/suits" className="hover:text-black transition-colors">W Bespoke Suits</Link></li>
                            <li><Link to="/bespoke/women/shirts" className="hover:text-black transition-colors">W Bespoke Shirts</Link></li>
                            <li><Link to="/bespoke/women/trousers" className="hover:text-black transition-colors">W Bespoke Trousers</Link></li>
                          </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="text-center relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                            <FaArrowDown />
                          </div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2">
                            VM 9-Step Process
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li><Link to="/garments-care" className="hover:text-black transition-colors">Garments Care</Link></li>
                            <li><Link to="/moving-tailor" className="hover:text-black transition-colors">The Moving Tailor</Link></li>
                            <li><Link to="/speak-stylist" className="hover:text-black transition-colors">Speak to the stylist</Link></li>
                          </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="flex flex-col items-center text-center relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                            <FaArrowDown />
                          </div>
                          <div className="w-full h-32 rounded-lg mb-4 flex items-center justify-center">
                            <img
                              src="https://www.shutterstock.com/image-photo/interior-mens-clothing-store-style-600nw-2016616760.jpg"
                              alt=""
                              className="rounded-lg object-cover w-full h-full"
                            />
                          </div>
                          <p className="text-sm font-medium text-gray-800 leading-relaxed">
                            Elevate your wardrobe with our stylists
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Made to Measure Mega Menu */}
                  {item === "Made to Measure" && hovered === "Made to Measure" && (
                    <div
                      className="absolute ml-[200px] left-1/2 transform -translate-x-1/2 top-full bg-white shadow-xl border border-gray-200 rounded-lg 
      w-[600px] max-w-[95vw] md:max-w-[90vw]"
                      style={{ zIndex: 1000 }}
                    >
                      {/* Dashed line across */}
                      <div className="border-t-2 border-dashed mt-4 border-gray-400 mx-6 relative">
                        {/* Arrow for Column 1 */}
                        <div className="absolute -top-0 left-1/4 transform -translate-x-1/2">
                          <FaArrowDown />
                        </div>
                        {/* Arrow for Column 2 */}
                        <div className="absolute -top-0 left-3/4 transform -translate-x-1/2">
                          <FaArrowDown />
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-8">

                        {/* Col 1: Made-To-Measure */}
                        <div className="flex flex-col items-center text-center">
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2 w-full">
                            Made-To-Measure Suits
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li>
                              <Link to="/made-to-measure/shirts" className="hover:text-black transition-colors">
                                Made-To-Measure Shirts
                              </Link>
                            </li>
                            <li>
                              <Link to="/made-to-measure/trousers" className="hover:text-black transition-colors">
                                Made-To-Measure Trousers
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Col 2: Packages */}
                        <div className="flex flex-col items-center text-center">
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2 w-full">
                            Corporate Packages
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li>
                              <Link to="/made-to-measure/executive" className="hover:text-black transition-colors">
                                Executive Packages
                              </Link>
                            </li>
                            <li>
                              <Link to="/made-to-measure/corporate" className="hover:text-black transition-colors">
                                Dapper's Signature
                              </Link>
                            </li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Indian Wedding Mega Menu */}
                  {item === "Indian Wedding" && hovered === "Indian Wedding" && (
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 top-full bg-white shadow-xl border border-gray-200 rounded-lg 
                        w-[800px] max-w-[95vw] md:max-w-[90vw]"
                      style={{ zIndex: 1000 }}
                    >
                      {/* Dashed line + arrows */}
                      <div className="relative">
                        <div className="border-t-2 border-dashed mt-4 border-gray-400 mx-6"></div>

                        <div className="absolute -top-0 left-[17%] md:left-[20%] sm:left-[25%] transform -translate-x-1/2">
                          <FaArrowDown />
                        </div>
                        <div className="absolute -top-0 left-[50%] sm:left-[50%] transform -translate-x-1/2">
                          <FaArrowDown />
                        </div>
                        <div className="absolute -top-0 left-[82%] md:left-[78%] sm:left-[75%] transform -translate-x-1/2">
                          <FaArrowDown />
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Column 1 - Traditional Wear */}
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2 text-center">
                            Traditional Wear
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700 text-center">
                            <li><Link to="/indian-wedding/vittorio-darbare" className="hover:text-black transition-colors">Vittorio Milano X Darbaré</Link></li>
                          </ul>
                        </div>

                        {/* Column 2 - Shop by Occasion */}
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2 text-center">
                            Shop by Occasion
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700 text-center">
                            <li><Link to="/indian-wedding/roka" className="hover:text-black transition-colors">Roka</Link></li>
                            <li><Link to="/indian-wedding/mehndi" className="hover:text-black transition-colors">Mehndi</Link></li>
                            <li><Link to="/indian-wedding/sangeet-cocktail" className="hover:text-black transition-colors">Sangeet & Cocktail</Link></li>
                            <li><Link to="/indian-wedding/pheras" className="hover:text-black transition-colors">Pheras</Link></li>
                          </ul>
                        </div>

                        {/* Column 3 - Accessories */}
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-black border-b border-gray-300 pb-2 text-center">
                            Accessories
                          </h4>
                          <ul className="space-y-3 text-sm text-gray-700 text-center">
                            <li><Link to="/indian-wedding/shoes" className="hover:text-black transition-colors">Indian Shoes</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Default Dropdowns for others */}
                  {item !== "Bespoke" &&
                    item !== "Indian Wedding" &&
                    item !== "Made to Measure" &&
                    subcategories[item] &&
                    hovered === item && (
                      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-56 mt-2">
                        {subcategories[item].map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* Meet the Sartorial Director Button */}
            <button
              className={`font-semibold transition ml-6 rounded ${scrolled
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
                <a href="#" className="block text-gray-800 text-base hover:text-black transition">
                  {item}
                </a>
                {subcategories[item] && (
                  <div className="ml-4 mt-2 space-y-2">
                    {subcategories[item].map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.link}
                        className="block text-gray-600 text-sm hover:text-black transition"
                      >
                        {sub.label}
                      </Link>
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





