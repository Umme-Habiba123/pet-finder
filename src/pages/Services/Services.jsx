'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
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
        
        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        /* Decorative line */
        .decorative-line {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }
        
        .decorative-line::before,
        .decorative-line::after {
          content: '';
          height: 2px;
          width: 50px;
          background: linear-gradient(to right, transparent, #D1D5DB, transparent);
        }
        
        @media (max-width: 640px) {
          .decorative-line::before,
          .decorative-line::after {
            width: 30px;
          }
        }
      `}</style>

      <section 
        id="services-section"
        className="py-16 lg:py-24 bg-base-100 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className={`decorative-line justify-center mb-4 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
              <span className="text-sm lg:text-base font-medium text-base-content/60 uppercase tracking-wider">
                What We Offer
              </span>
            </div>
            
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-base-content mb-4 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              OUR SERVICES
            </h2>
            
            <div className={`flex justify-center ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              <svg className="w-12 h-12 lg:w-16 lg:h-16 fill-current text-accent-yellow opacity-30" viewBox="0 0 24 24">
                <path d="M8.5 3C7.119 3 6 4.119 6 5.5S7.119 8 8.5 8 11 6.881 11 5.5 9.881 3 8.5 3zm7 0C14.119 3 13 4.119 13 5.5S14.119 8 15.5 8 18 6.881 18 5.5 16.881 3 15.5 3zM5 9c-1.381 0-2.5 1.119-2.5 2.5S3.619 14 5 14s2.5-1.119 2.5-2.5S6.381 9 5 9zm14 0c-1.381 0-2.5 1.119-2.5 2.5S17.619 14 19 14s2.5-1.119 2.5-2.5S20.381 9 19 9zm-7 2c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.761-2.239-5-5-5z"/>
              </svg>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Content - Text */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left delay-400' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-content mb-4">
                  Quality Services
                </h3>
                
                <p className="text-base lg:text-lg text-base-content/70 mb-6 leading-relaxed">
                  We offer quick & easy services for cats and dogs, accumsan felis id, fermentum purus. Quisque vitae hendrerit elit.
                </p>
                
                <p className="text-sm lg:text-base text-base-content/60 leading-relaxed">
                  Aliquam erat volutpat In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                </p>
              </div>
              
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="btn bg-gray-300 hover:bg-gray-500 text-black border-none px-8 lg:px-10 py-3 text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
            
            {/* Right Content - Cat Image */}
            <div className={`relative ${isVisible ? 'animate-fade-in-right delay-500' : 'opacity-0'}`}>
              <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px]">
                {/* Decorative background blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-base-200 to-transparent rounded-3xl blur-2xl opacity-50"></div>
                
                {/* Cat Image */}
                <div className="relative z-10 h-full w-full flex items-end justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Adorable cat representing our quality services" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-5 w-20 h-20 bg-accent-yellow/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-5 w-24 h-24 bg-accent-yellow/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="mt-16 lg:mt-24 max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-base-300 to-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
}