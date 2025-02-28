import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import tiktok from '../images/tiktok.svg';
import twitter from '../images/twitter-x.svg';
import youtube from '../images/youtube.svg';
import '../index.css';


const OnePage = () => {
  return (
    <div className="bg-gradient-to-r from-red-300 text-white">
      <Navbar />

      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold uppercase">React Animation App</h1>
        <p className="mt-4 max-w-xl">
          Dette er en page som er lavet med framer motion.
          De små knapper rundt omkring virker ikke. Så det er ikke muligt at klikke rundt.
          Der er blevet en animation oppe i navbaren hvis man hover over den med react-spring.
          Animationen er også på hele siden, for hvergang man reloader og scroller ned - scroll-effects.
        </p>
        <button className="mt-6 px-4 py-2 font-bold text-white bg-red-900 rounded">PRE-ORDER NOW</button>
      </motion.section>

      <motion.section
        id="products"
        className="py-30 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8">PRODUCTS</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-bold">Lorem ipsum</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-2 font-bold text-white bg-red-900 rounded">SHOP NOW</button>
          </div>
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-bold">Lorem ipsum</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-2 font-bold text-white bg-red-900 rounded">SHOP NOW</button>
          </div>
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-bold">Lorem ipsum</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-2 font-bold text-white bg-red-900 rounded">SHOP NOW</button>
          </div>
        </div>
        <div>
          <button className="mt-4 px-4 py-2 font-bold text-white bg-red-900 rounded">VISIT STORE</button>
        </div>
      </motion.section>

      <motion.section
        id="tour"
        className="py-60"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 50 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 my-8">TOUR</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="bg-white text-black p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">Lorem ipsum</h3>
              <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className="px-4 py-2 font-bold text-white bg-red-900 rounded">TICKETS</button>
          </div>
          <div className="bg-white text-black p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">Lorem ipsum</h3>
              <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className="px-4 py-2 font-bold text-white bg-red-900 rounded">TICKETS</button>
          </div>
          <div className="bg-white text-black p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">Lorem ipsum</h3>
              <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className="px-4 py-2 font-bold text-white bg-red-900 rounded">TICKETS</button>
          </div>
          <div className="bg-white text-black p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">Lorem ipsum</h3>
              <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className="px-4 py-2 font-bold text-white bg-red-900 rounded">TICKETS</button>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="sign-up"
        className="py-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8">SIGN UP TO THE NEWSLETTER BELOW</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="email" placeholder="Email" className="w-full p-4 bg-gray-200 text-black rounded" required />
          <input type="text" placeholder="Phone Number" className="w-full p-4 bg-gray-200 text-black rounded" required />
          <select className="w-full p-4 bg-gray-300 text-black rounded" required>
            <option>Choose Country</option>
          </select>
          <button type="submit" className="w-full p-4 font-bold text-white bg-red-900 rounded">REGISTER</button>
          <div className="text-left mt-4 space-y-5">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Receive SMS from Artist Name
            </label>
            <label className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              Sign me up for updates about new music, competitions, exclusive promotions & events from artists similar to Artist Name
            </label>
            <p className="text-xs mt-4">
              Emails will be sent by or on behalf of Universal Music Operations Ltd, 4 Pancras Square, London. N1C 4AG, UK. +44 (0)20 3932 6000. You may withdraw your consent at any time. See Privacy Policy at <a href="https://www.umusic.co.uk/privacy.html" className="underline">https://www.umusic.co.uk/privacy.html</a>.
            </p>
            <p className="text-xs mt-2">
              By ticking the SMS opt-in box and submitting this form, I agree to receive text messages from and about Artist Name (including prerecorded and/or by autodialer). Up to 20 messages per month per opt-in. Consent is not a condition of any purchase. Msg & data rates may apply. See Privacy Policy and Terms for further information.
            </p>
            <div className="text-xs mt-2">
              <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms & Conditions</a>
            </div>
          </div>
        </form>
      </motion.section>

      <footer className="text-center py-8">
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

export default OnePage;
