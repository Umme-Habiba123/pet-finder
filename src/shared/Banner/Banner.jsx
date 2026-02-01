'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx>{`
        .text-accent-yellow {
          color: #D4A017;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        /* Decorative elements */
        .paw-print {
          position: absolute;
          opacity: 0.08;
        }
        
        .bone-icon {
          position: absolute;
          opacity: 0.12;
        }
        
        /* Wave divider */
        .wave-divider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        
        .wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 80px;
        }
        
        @media (max-width: 768px) {
          .wave-divider svg {
            height: 40px;
          }
        }
      `}</style>

      <section className="relative min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 overflow-hidden pt-24 lg:pt-32">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 lg:right-20 animate-float">
          <svg className="bone-icon w-20 h-20 lg:w-32 lg:h-32 fill-current text-base-300" viewBox="0 0 24 24">
            <path d="M18.5 2C17.119 2 16 3.119 16 4.5c0 .78.36 1.47.92 1.93-.64.82-1.43 1.54-2.29 2.14-.22-.98-.94-1.79-1.88-2.17C13.35 5.53 14 4.58 14 3.5 14 2.119 12.881 1 11.5 1S9 2.119 9 3.5c0 1.08.65 2.03 1.75 2.9-.94.38-1.66 1.19-1.88 2.17-.86-.6-1.65-1.32-2.29-2.14.56-.46.92-1.15.92-1.93C7.5 3.119 6.381 2 5 2S2.5 3.119 2.5 4.5c0 1.14.77 2.1 1.82 2.39.31 1.05.86 2.01 1.6 2.84.5 2.33 2.05 4.31 4.08 5.44v.08c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-.08c2.03-1.13 3.58-3.11 4.08-5.44.74-.83 1.29-1.79 1.6-2.84 1.05-.29 1.82-1.25 1.82-2.39 0-1.381-1.119-2.5-2.5-2.5z"/>
          </svg>
        </div>
        
        <div className="absolute top-1/4 left-10 lg:left-20 animate-float" style={{ animationDelay: '1s' }}>
          <svg className="paw-print w-16 h-16 lg:w-24 lg:h-24 fill-current text-base-300" viewBox="0 0 24 24">
            <path d="M8.5 3C7.119 3 6 4.119 6 5.5S7.119 8 8.5 8 11 6.881 11 5.5 9.881 3 8.5 3zm7 0C14.119 3 13 4.119 13 5.5S14.119 8 15.5 8 18 6.881 18 5.5 16.881 3 15.5 3zM5 9c-1.381 0-2.5 1.119-2.5 2.5S3.619 14 5 14s2.5-1.119 2.5-2.5S6.381 9 5 9zm14 0c-1.381 0-2.5 1.119-2.5 2.5S17.619 14 19 14s2.5-1.119 2.5-2.5S20.381 9 19 9zm-7 2c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.761-2.239-5-5-5z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 right-20 lg:right-40 animate-float" style={{ animationDelay: '0.5s' }}>
          <svg className="paw-print w-12 h-12 lg:w-20 lg:h-20 fill-current text-base-300" viewBox="0 0 24 24">
            <path d="M8.5 3C7.119 3 6 4.119 6 5.5S7.119 8 8.5 8 11 6.881 11 5.5 9.881 3 8.5 3zm7 0C14.119 3 13 4.119 13 5.5S14.119 8 15.5 8 18 6.881 18 5.5 16.881 3 15.5 3zM5 9c-1.381 0-2.5 1.119-2.5 2.5S3.619 14 5 14s2.5-1.119 2.5-2.5S6.381 9 5 9zm14 0c-1.381 0-2.5 1.119-2.5 2.5S17.619 14 19 14s2.5-1.119 2.5-2.5S20.381 9 19 9zm-7 2c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.761-2.239-5-5-5z"/>
          </svg>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-12rem)]">
            
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              
              {/* Main Heading */}
              <div className={`space-y-3 ${isVisible ? 'animate-fade-in-right delay-100' : 'opacity-0'}`}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-base-content leading-tight">
                  Ready to{' '}
                  <span className="relative inline-block">
                    <span className="text-accent-yellow">Adopt!</span>
                    <svg 
                      className="absolute -bottom-2 left-0 w-full h-3" 
                      viewBox="0 0 200 12" 
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M2 10C60 2, 140 2, 198 10" 
                        stroke="#D4A017" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
              </div>
              
              {/* Description */}
              <p className={`text-base sm:text-lg lg:text-xl text-base-content/70 max-w-xl mx-auto lg:mx-0 ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              {/* CTA Button */}
              <div className={`${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
                <Link 
                  href="/puppies"
                  className="btn bg-[#FF6B6B] hover:bg-[#FF5252] text-white border-none px-8 lg:px-10 py-3 text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group inline-flex items-center gap-3"
                >
                  View Puppies
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Stats or Features (Optional) */}
              <div className={`grid grid-cols-3 gap-4 pt-8 lg:pt-12 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-accent-yellow">500+</div>
                  <div className="text-sm lg:text-base text-base-content/60 mt-1">Happy Pets</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-accent-yellow">150+</div>
                  <div className="text-sm lg:text-base text-base-content/60 mt-1">Adoptions</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-accent-yellow">24/7</div>
                  <div className="text-sm lg:text-base text-base-content/60 mt-1">Support</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Dog Image */}
            <div className={`relative ${isVisible ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] max-w-2xl mx-auto">
                {/* Decorative Circle Background */}
                <div className="absolute inset-0 bg-base-300/30 rounded-full blur-3xl transform scale-75"></div>
                
                {/* Dog Image Container */}
                <div className="relative z-10 h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Adorable dog ready for adoption" 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradient Overlay for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
                
                {/* Floating Elements around the dog */}
                <div className="absolute -top-5 -right-5 animate-float">
                  <svg className="w-16 h-16 lg:w-20 lg:h-20 fill-current text-accent-yellow opacity-20" viewBox="0 0 24 24">
                    <path d="M18.5 2C17.119 2 16 3.119 16 4.5c0 .78.36 1.47.92 1.93-.64.82-1.43 1.54-2.29 2.14-.22-.98-.94-1.79-1.88-2.17C13.35 5.53 14 4.58 14 3.5 14 2.119 12.881 1 11.5 1S9 2.119 9 3.5c0 1.08.65 2.03 1.75 2.9-.94.38-1.66 1.19-1.88 2.17-.86-.6-1.65-1.32-2.29-2.14.56-.46.92-1.15.92-1.93C7.5 3.119 6.381 2 5 2S2.5 3.119 2.5 4.5c0 1.14.77 2.1 1.82 2.39.31 1.05.86 2.01 1.6 2.84.5 2.33 2.05 4.31 4.08 5.44v.08c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-.08c2.03-1.13 3.58-3.11 4.08-5.44.74-.83 1.29-1.79 1.6-2.84 1.05-.29 1.82-1.25 1.82-2.39 0-1.381-1.119-2.5-2.5-2.5z"/>
                  </svg>
                </div>
                
                <div className="absolute -bottom-5 -left-5 animate-float" style={{ animationDelay: '1.5s' }}>
                  <svg className="w-12 h-12 lg:w-16 lg:h-16 fill-current text-accent-yellow opacity-20" viewBox="0 0 24 24">
                    <path d="M8.5 3C7.119 3 6 4.119 6 5.5S7.119 8 8.5 8 11 6.881 11 5.5 9.881 3 8.5 3zm7 0C14.119 3 13 4.119 13 5.5S14.119 8 15.5 8 18 6.881 18 5.5 16.881 3 15.5 3zM5 9c-1.381 0-2.5 1.119-2.5 2.5S3.619 14 5 14s2.5-1.119 2.5-2.5S6.381 9 5 9zm14 0c-1.381 0-2.5 1.119-2.5 2.5S17.619 14 19 14s2.5-1.119 2.5-2.5S20.381 9 19 9zm-7 2c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.761-2.239-5-5-5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider at Bottom */}
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-base-100"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}