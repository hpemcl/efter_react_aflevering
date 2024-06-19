import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dock from '../components/Dock/dock';
import DockCard from '../components/DockCard/dockCard';
import DockDivider from '../components/DockDivider/dockDivider';
import Card from '../components/Card/card';
import AnimatingAuto from '../components/AnimatingAuto/animatingAuto';
import informationImage from '../images/information.jpg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import tiktok from '../images/tiktok.svg';
import twitter from '../images/twitter-x.svg';
import youtube from '../images/youtube.svg';
import '../index.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'CSS-Animation Page', path: '/css_animation' },
  { label: 'Information Website', path: '/information_website' },
  { label: 'One Page Website', path: '/one_page' },
  { label: 'Github', path: '/contact' }
];

const InformationWebsite = () => {
  const [targetNumber, setTargetNumber] = useState(0);

  const handleButtonClick = (number) => {
    setTargetNumber(number);
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Dock>
        {NAV_ITEMS.map((item, index) => (
          <React.Fragment key={index}>
            <Link to={item.path}>
              <DockCard label={item.label} />
            </Link>
            {index < NAV_ITEMS.length - 1 && <DockDivider key={`divider-${index}`} />}
          </React.Fragment>
        ))}
      </Dock>
      <header className="min-h-screen flex flex-row justify-between items-center p-8 space-x-6">
        <div className="flex flex-col justify-center items-start space-y-6 max-w-xl">
          <span className="bg-white text-black text-sm px-5 py-2 rounded-full">React Animation App</span>
          <h1 className="text-6xl font-bold">Welcome to react animation demonstration</h1>
          <p className="text-lg">Dette er en page som er lavet med react spring. 
          De små knapper rundt omkring virker ikke. Så det er ikke muligt at klikke rundt. 
          Der er blevet en animation oppe i navbaren hvis man hover over den med react-spring. 
          Der er også blevet en animation ved længere ned tallene</p>
          <div className="space-x-4">
            <button className="bg-blue-600 px-6 py-2 rounded-full">Get started</button>
            <button className="bg-gray-700 px-6 py-2 rounded-full">Live Demo</button>
          </div>
        </div>
        <img src={informationImage} alt="Informational graphic" className="rounded-lg shadow-lg" width={500} height={300} />
      </header>
      <div className="py-16 text-center">
        <p className="text-lg">The world’s most innovative companies use our app</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-5xl">
            <div className="text-center bg-white text-black rounded px-8 py-5">
              <h3 className="text-2xl font-bold">8000+</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center bg-white text-black rounded px-8 py-5">
              <h3 className="text-2xl font-bold">900m+</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center bg-white text-black rounded px-8 py-5">
              <h3 className="text-2xl font-bold">99.9%</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center bg-white text-black rounded px-8 py-5">
              <h3 className="text-2xl font-bold">12m</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Deploy faster</h2>
          <p className="mt-4 text-lg">Welcome to react animation demonstration</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card src={informationImage} />
          <Card src={informationImage} />
          <Card src={informationImage} />
        </div>
      </div>
      <div className="py-16 bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our track record</h2>
          <p className="mt-4 text-lg">Trusted by thousands of developers worldwide</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold"><AnimatingAuto target={targetNumber} /></h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleButtonClick(8000)}>Set to 8000</button>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold"><AnimatingAuto target={targetNumber} /></h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleButtonClick(900000000)}>Set to 900m</button>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold"><AnimatingAuto target={targetNumber} /></h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleButtonClick(99.9)}>Set to 99.9</button>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold"><AnimatingAuto target={targetNumber} /></h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleButtonClick(12000000)}>Set to 12m</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-8 bg-gray-800 text-center">
        <p>© 2020 Your Company, Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <img src={facebook} alt="Facebook" width={24} height={24} />
          <img src={instagram} alt="Instagram" width={24} height={24} />
          <img src={tiktok} alt="TikTok" width={24} height={24} />
          <img src={twitter} alt="Twitter" width={24} height={24} />
          <img src={youtube} alt="YouTube" width={24} height={24} />
        </div>
      </footer>
    </div>
  );
};

export default InformationWebsite;
