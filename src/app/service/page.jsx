'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Service() {
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

    const section = document.getElementById('service-offers-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      title: 'Bath & Brush',
      description: 'PetFinder offers professional, bonded and insured pet care services including grooming, bathing, and brushing to keep your pet healthy and happy.',
      image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '/services/bath-brush'
    },
    {
      title: 'Bath & Brush',
      description: 'PetFinder offers professional, bonded and insured pet care services including grooming, bathing, and brushing to keep your pet healthy and happy.',
      image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '/services/bath-brush'
    },
    {
      title: 'Hair Styling',
      description: 'PetFinder offers professional, bonded and insured pet care services including expert hair styling and grooming to make your pet look their best.',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '/services/hair-styling'
    },
    {
      title: 'Hair Styling',
      description: 'PetFinder offers professional, bonded and insured pet care services including expert hair styling and grooming to make your pet look their best.',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '/services/hair-styling'
    },
    {
      title: 'Coat Handler',
      description: 'PetFinder offers professional, bonded and insured pet care services including specialized coat handling and maintenance for all breeds.',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '/services/coat-handler'
    },
    {
      title: 'Coat Handler',
      description: 'PetFinder offers professional, bonded and insured pet care services including specialized coat handling and maintenance for all breeds.',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      link: '/services/coat-handler'
    }
  ];

  return (
    <>
      <style jsx>{`
        .text-accent-yellow {
          color: #D4A017;
        }
        
        .text-accent-red {
          color: #FF6B6B;
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
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
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
        
        /* Decorative paw pattern */
        .paw-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .paw-divider::before,
        .paw-divider::after {
          content: '';
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, transparent, currentColor, transparent);
          opacity: 0.3;
        }
        
        /* Card hover effects */
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
        }
        
        .service-card img {
          transition: transform 0.4s ease;
        }
        
        .service-card:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <section 
        id="service-offers-section"
        className="py-16 lg:py-24 bg-base-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            {/* Paw Icon Divider */}
            <div className={`paw-divider text-accent-yellow mb-4 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M8.5 3C7.119 3 6 4.119 6 5.5S7.119 8 8.5 8 11 6.881 11 5.5 9.881 3 8.5 3zm7 0C14.119 3 13 4.119 13 5.5S14.119 8 15.5 8 18 6.881 18 5.5 16.881 3 15.5 3zM5 9c-1.381 0-2.5 1.119-2.5 2.5S3.619 14 5 14s2.5-1.119 2.5-2.5S6.381 9 5 9zm14 0c-1.381 0-2.5 1.119-2.5 2.5S17.619 14 19 14s2.5-1.119 2.5-2.5S20.381 9 19 9zm-7 2c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.761-2.239-5-5-5z"/>
              </svg>
            </div>
            
            <p className={`text-sm lg:text-base text-base-content/60 italic mb-3 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              Because We Really Care About Your Pets
            </p>
            
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
              More Service Offers
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card bg-base-100 rounded-2xl overflow-hidden shadow-lg border border-base-300 ${
                  isVisible ? `animate-scale-in delay-${(index + 4) * 100}` : 'opacity-0'
                }`}
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-base-200">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-base-content mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-base-content/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-accent-red font-semibold text-sm lg:text-base uppercase tracking-wide hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}