import React from 'react';
import '../index.css';
import Navbar from '../components/Navbar';
import 'animate.css';
import informationImage from '../images/information.jpg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import tiktok from '../images/tiktok.svg';
import twitter from '../images/twitter-x.svg';
import youtube from '../images/youtube.svg';



const AnimationDemo = () => {
  return (
    <div className="bg-white text-black min-h-screen">
        <Navbar />
        <header className="min-h-screen flex flex-row justify-between items-center p-8 space-x-6 animate__animated animate__backInLeft animate__slow">
            <div className="flex flex-col justify-center items-start space-y-6 max-w-xl">
            <span className="bg-blue-500 text-white text-sm px-5 py-2 rounded-full">React Animation App</span>
            <h1 className="text-6xl font-bold">Welcome to react animation demonstration</h1>
            <p className="text-lg">Dette er en page som er lavet med CSS Animation via https://animate.style/. 
            Animationerne er blevet skabt med animate__backInLeft og animate__slow. 
            De små knapper rundt omkring virker ikke. Så det er ikke muligt at klikke rundt.  
            Dog kan man hover over navbaren som er taget fra react-spring. 
            Skabelonen er taget fra TailwindCSS og bruger ogs dens framework</p>
            <div className="space-x-4">
                <button className="bg-blue-600 px-6 py-2 rounded-full text-white">Get started</button>
                <button className="bg-gray-700 px-6 py-2 rounded-full text-white">Live Demo</button>
            </div>
            </div>
            <img src={informationImage} alt="Informational graphic" className="rounded-lg shadow-lg" width={500} height={300} />
        </header>
        <div className="py-16 text-center">
            <p className="text-lg animate__animated animate__backInLeft animate__slow">Lorem ipsum dolor sit amet, consectetur sadipiscing elit, sed</p>
            <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-blue-600 text-white px-4 py-2 rounded animate__animated animate__backInLeft animate__slow">Sponsor</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded animate__animated animate__backInLeft animate__slow">Sponsor</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded animate__animated animate__backInLeft animate__slow">Sponsor</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded animate__animated animate__backInLeft animate__slow">Sponsor</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded animate__animated animate__backInLeft animate__slow">Sponsor</button>
            </div>
        </div>
        <div className="py-16">
            <div className="text-center mb-12 animate__animated animate__backInLeft animate__slow">
            <h2 className="text-4xl font-bold">Deploy faster</h2>
            <p className="mt-4 text-lg">Welcome to react animation demonstration</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center animate__animated animate__backInLeft animate__slow">
                <div className="w-12 h-12 bg-blue-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white">Lorem ipsum</h3>
                <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn more</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center animate__animated animate__backInLeft animate__slow">
                <div className="w-12 h-12 bg-blue-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white">Lorem ipsum</h3>
                <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn more</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center animate__animated animate__backInLeft animate__slow">
                <div className="w-12 h-12 bg-blue-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white">Lorem ipsum</h3>
                <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn more</button>
            </div>
            </div>
        </div>
        <div className="py-8 bg-gray-900">
            <div className="text-center mb-12 animate__animated animate__backInLeft animate__slow">
            <h2 className="text-4xl font-bold text-white">Deploy faster</h2>
            <p className="mt-4 text-lg text-white">Welcome to react animation demonstration</p>
            </div>
            <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
                <div className="text-center animate__animated animate__backInLeft animate__slow">
                <h3 className="text-2xl font-bold text-white">8000+</h3>
                <p className="mt-2 text-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="text-center animate__animated animate__backInLeft animate__slow">
                <h3 className="text-2xl font-bold text-white">900m+</h3>
                <p className="mt-2 text-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="text-center animate__animated animate__backInLeft animate__slow">
                <h3 className="text-2xl font-bold text-white">99.9%</h3>
                <p className="mt-2 text-white">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="text-center animate__animated animate__backInLeft animate__slow">
                <h3 className="text-2xl font-bold text-white">12m</h3>
                <p className="mt-2 text-white">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            </div>
        </div>
        <footer className="py-8 bg-gray-800 text-center">
            <p className="text-white">© 2020 Your Company, Inc. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
            <img src={facebook} alt="Facebook logo" width={24} height={24} />
            <img src={instagram} alt="Instagram logo" width={24} height={24} />
            <img src={tiktok} alt="TikTok logo" width={24} height={24} />
            <img src={twitter} alt="Twitter logo" width={24} height={24} />
            <img src={youtube} alt="YouTube logo" width={24} height={24} />
            </div>
        </footer>
    </div>
  );
};

export default AnimationDemo;
