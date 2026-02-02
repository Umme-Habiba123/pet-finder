'use client';

import { useState, useEffect } from 'react';

export default function FeaturedSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

    const section = document.getElementById('featured-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const features = [
    {
      icon: (
        <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.5 2C17.119 2 16 3.119 16 4.5c0 .78.36 1.47.92 1.93-.64.82-1.43 1.54-2.29 2.14-.22-.98-.94-1.79-1.88-2.17C13.35 5.53 14 4.58 14 3.5 14 2.119 12.881 1 11.5 1S9 2.119 9 3.5c0 1.08.65 2.03 1.75 2.9-.94.38-1.66 1.19-1.88 2.17-.86-.6-1.65-1.32-2.29-2.14.56-.46.92-1.15.92-1.93C7.5 3.119 6.381 2 5 2S2.5 3.119 2.5 4.5c0 1.14.77 2.1 1.82 2.39.31 1.05.86 2.01 1.6 2.84.5 2.33 2.05 4.31 4.08 5.44v.08c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-.08c2.03-1.13 3.58-3.11 4.08-5.44.74-.83 1.29-1.79 1.6-2.84 1.05-.29 1.82-1.25 1.82-2.39 0-1.381-1.119-2.5-2.5-2.5z"/>
        </svg>
      ),
      title: "Largest non-profit pet's shelter",
      description: "Well gaudy hound hired inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed."
    },
    {
      icon: (
        <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      title: "Convenient pet adoption for public",
      description: "Well gaudy hound hired inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed."
    },
    {
      icon: (
        <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
          <circle cx="9" cy="9" r="1.5"/>
          <circle cx="15" cy="9" r="1.5"/>
        </svg>
      ),
      title: "Innovative ways to help animals",
      description: "Well gaudy hound hired inset flailed luxuriant much followed less this maternal oh well unavoidable crudely aloof in more save groomed."
    }
  ];

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
        
        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        /* Video overlay styles */
        .video-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }
        
        .video-container:hover .video-overlay {
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .play-button {
          width: 80px;
          height: 80px;
          background: #D4A017;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 3px solid rgba(255, 255, 255, 0.9);
        }
        
        .play-button:hover {
          background: #B8860B;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .play-button {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>

      <section 
        id="featured-section"
        className="py-16 lg:py-24 bg-base-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Video Section */}
            <div className={`relative ${isVisible ? 'animate-fade-in-left delay-100' : 'opacity-0'}`}>
              <div className="relative video-container aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Happy couple with their adopted dog at the beach"
                  className="w-full h-full object-cover"
                />
                
                {/* Dark overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Play Button Overlay */}
                <div className="video-overlay">
                  <button 
                    className="play-button group"
                    aria-label="Play featured video"
                    onClick={openVideoModal}
                  >
                    <svg 
                      className="w-8 h-8 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                
                {/* Featured Video Label */}
                <div className="absolute bottom-6 left-6 bg-neutral text-neutral-content px-5 py-2.5 rounded-lg shadow-lg">
                  <span className="font-semibold text-sm lg:text-base uppercase tracking-wide">
                    Featured Video
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Features List */}
            <div className="space-y-8 lg:space-y-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex gap-6 items-start ${
                    isVisible 
                      ? `animate-fade-in-right delay-${(index + 2) * 100}` 
                      : 'opacity-0'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="text-base-content hover:text-accent-yellow transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-base-content mb-3 hover:text-accent-yellow transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base text-base-content/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeVideoModal}
          >
            <div 
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 btn btn-circle btn-sm bg-neutral hover:bg-neutral-focus text-neutral-content"
                aria-label="Close video"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* YouTube Video Embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5MpfPbFlpNw?si=IEhs0o3VUd4G_xwi"
                title="Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </>
  );
}