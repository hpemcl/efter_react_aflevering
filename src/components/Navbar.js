import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import tiktok from '../images/tiktok.svg';
import twitter from '../images/twitter-x.svg';
import youtube from '../images/youtube.svg';

const Navbar = () => {
  return (
    <nav className="bg-transperant p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex space-x-4">
          <img src={facebook} alt="Facebook" width={24} height={24} />
          <img src={instagram} alt="Instagram" width={24} height={24} />
          <img src={tiktok} alt="TikTok" width={24} height={24} />
          <img src={twitter} alt="Twitter" width={24} height={24} />
          <img src={youtube} alt="YouTube" width={24} height={24} />
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-black hover:text-gray-400">Home</Link>
          <Link to="/css_animation" className="text-black hover:text-gray-400">CSS Animation</Link>
          <Link to="/information_website" className="text-black hover:text-gray-400">Information Website</Link>
          <Link to="/one_page" className="text-black hover:text-gray-400">One Page Website</Link>
          <Link to="/contact" className="text-black hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
