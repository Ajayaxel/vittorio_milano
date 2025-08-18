import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      alert('Thank you for subscribing!');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-[rgb(96,12,3)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <div className="mb-4  ">
            <img
              src="VM logo final-02.png"
              alt="VM logo final-02.png"
              className="h-[200px] mx-auto object-contain "
            />
          </div>

          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Stay connected. Follow us on social media for style inspiration, behind-the-scenes glimpses into our
            atelier and exclusive updates on upcoming events and trunk shows.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">

          {/* Flagship Store */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">Flagship Store</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">123 Fashion Avenue</p>
                  <p className="text-gray-300 text-sm">Milano, Italy 20121</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+39 02 1234 5678</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@vittorio.com</p>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">
              <span className="border-b border-white pb-1">EXPLORE</span>
            </h4>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Bespoke</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Vittorio Milano x Darbare</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Made To Measure</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">The Moving Tailor</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">Vittorio Club</a>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-bold mb-4 text-white">STAY INSPIRED</h4>
            <p className="text-gray-300 text-sm mb-4">
              Sign up to our email newsletter to keep up to date with our latest news and special offers
            </p>
            <div className="flex w-[400px] max-w-md mx-auto">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="EMAIL ADDRESS"
    className="flex-1 px-3 py-2 bg-transparent text-white placeholder-gray-400 border border-gray-400 border-r-0 focus:border-white focus:outline-none transition-colors duration-300 text-sm sm:text-base"
  />
  <button
    onClick={handleSubscribe}
    className="bg-transparent text-white font-semibold py-2 px-5 border border-gray-400 hover:border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base"
  >
    SUBMIT
  </button>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


