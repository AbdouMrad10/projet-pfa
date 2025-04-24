import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Compass } from 'lucide-react';
import logo from "../../assets/Wahb-logo.png"; 

export const Footer = () => {
  return (
    <footer className="bg-[#033F73] text-white pt-12 pb-8 px-6 sm:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#BFAF99]/30 pb-10">
        {/* Logo / About */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="h-10 w-30" />
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            Wahb is dedicated to excellence and innovation in every aspect of our service. 
            We strive to provide exceptional value and build lasting relationships with our clients and partners.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#BFAF99]">Navigation</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="/" className="hover:text-[#BF8C6F] transition duration-300 flex items-center">
                <span className="w-1 h-1 bg-[#8C513B] rounded-full mr-2"></span>
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#BF8C6F] transition duration-300 flex items-center">
                <span className="w-1 h-1 bg-[#8C513B] rounded-full mr-2"></span>
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#BF8C6F] transition duration-300 flex items-center">
                <span className="w-1 h-1 bg-[#8C513B] rounded-full mr-2"></span>
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#BF8C6F] transition duration-300 flex items-center">
                <span className="w-1 h-1 bg-[#8C513B] rounded-full mr-2"></span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#BFAF99]">Stay Connected</h3>
          <p className="text-gray-200 mb-4 text-sm">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded bg-white/10 text-sm text-white placeholder:text-gray-300 outline-none border border-transparent focus:border-[#BFAF99] transition duration-300"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#BFAF99] w-4 h-4" />
            </div>
            <button
              type="submit"
              className="bg-[#8C513B] hover:bg-[#59280B] text-white py-2.5 px-4 rounded text-sm transition duration-300 transform hover:translate-y-[-2px]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#BFAF99]">Get in Touch</h3>
          <p className="text-gray-200 text-sm mb-3 flex items-center">
            <Mail className="mr-2 w-4 h-4 text-[#BFAF99]" /> 
            <span>contact@wahb.com</span>
          </p>
          <div className="flex gap-4 mt-6">
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#BF8C6F] transition duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#BF8C6F] transition duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#BF8C6F] transition duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-300 mb-4 md:mb-0">
          © {new Date().getFullYear()} Wahb. All rights reserved.
        </p>
        <div className="flex space-x-6 text-gray-300">
          <a href="/privacy" className="hover:text-[#BFAF99] transition duration-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#BFAF99] transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

