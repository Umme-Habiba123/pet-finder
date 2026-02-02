"use client";

import React from 'react';
import { 
  FaTwitter, FaFacebookF, FaGooglePlusG, FaYoutube, 
  FaPinterestP, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaw 
} from 'react-icons/fa';

const Footer = () => {
  const latestPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&h=150&fit=crop",
      title: "Acute Yellow Re-Laid Less Or Affirmatively Cats",
      date: "March 14, 2018"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=150&h=150&fit=crop",
      title: "Acute Yellow Re-Laid Less Or Affirmatively Cats",
      date: "March 14, 2018"
    }
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-950 text-base-content transition-colors duration-500 pt-20 pb-10 border-t border-gray-100 dark:border-gray-800">
      
      {/* Decorative Paw Background (Banner এর মত হালকা এলিমেন্ট) */}
      <div className="absolute top-10 right-10 opacity-5 dark:opacity-10 pointer-events-none">
        <FaPaw size={120} className="text-gray-400 dark:text-gray-600 rotate-12" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* ১. লোগো এবং বর্ণনা */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <FaPaw className="text-4xl text-[#D4A017] transition-transform group-hover:rotate-12" />
              <div>
                <h2 className="text-3xl font-bold text-black dark:text-white tracking-tight leading-none">
                  Pet<span className="text-[#D4A017]">Finder</span>
                </h2>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1 font-bold">About Your Pets</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              This prodigiously grew tortoise charact stupidly pernicious jeepers along while accordingly 
              under useful much salacious walking fars.
            </p>
            {/* সোশ্যাল আইকন */}
            <div className="flex gap-3">
              {[FaTwitter, FaFacebookF, FaGooglePlusG, FaYoutube, FaPinterestP].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-9 h-9 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:bg-[#D4A017] dark:hover:bg-[#D4A017] border border-gray-200 dark:border-gray-700 rounded-full transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ২. ওয়েব লিঙ্কসমূহ */}
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex flex-col after:content-[''] after:w-12 after:h-1 after:bg-[#D4A017] after:mt-2">
              Web Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Blog', 'Service', 'Shop', 'Contact'].map((item) => (
                <li key={item} className="flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-[2px] bg-[#D4A017] transition-all duration-300"></span>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#D4A017] dark:hover:text-[#D4A017] transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩. সাম্প্রতিক পোস্ট */}
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex flex-col after:content-[''] after:w-12 after:h-1 after:bg-[#D4A017] after:mt-2">
              Latest Post
            </h3>
            <div className="space-y-6">
              {latestPosts.map((post) => (
                <div key={post.id} className="flex gap-4 group cursor-pointer">
                  <div className="overflow-hidden rounded-md flex-shrink-0 border dark:border-gray-800">
                    <img 
                      src={post.image} 
                      alt="post" 
                      className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight group-hover:text-[#D4A017] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ৪. কন্টাক্ট ইনফো */}
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-8 flex flex-col after:content-[''] after:w-12 after:h-1 after:bg-[#D4A017] after:mt-2">
              Contact Info
            </h3>
            <ul className="space-y-5 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#D4A017] mt-1 shrink-0" />
                <span className="text-sm font-medium">BellSouth, Harley Street Florida 33968</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#D4A017] shrink-0" />
                <span className="text-sm font-medium">+(1) 234 567 8900</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#D4A017] shrink-0" />
                <span className="text-sm font-medium border-b border-transparent hover:border-[#D4A017] transition-all">
                  example@petfinder.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* কপিরাইট সেকশন */}
        <div className="mt-20 py-8 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500 font-bold tracking-widest uppercase">
            Copyrights © 2026 <span className="text-[#D4A017]">PetFinder</span> • All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;