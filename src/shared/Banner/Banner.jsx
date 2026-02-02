"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 overflow-hidden pt-24 lg:pt-32">
      {/* Decorative Background */}
      <div className="absolute top-20 right-10 lg:right-20 animate-float">
        <svg
          className="w-20 h-20 lg:w-32 lg:h-32 fill-current text-base-300 opacity-12"
          viewBox="0 0 24 24"
        >
          <path d="M18.5 2C17.119 2 16 3.119 16 4.5c0 .78.36 1.47.92 1.93-.64.82-1.43 1.54-2.29 2.14-.22-.98-.94-1.79-1.88-2.17C13.35 5.53 14 4.58 14 3.5 14 2.119 12.881 1 11.5 1S9 2.119 9 3.5c0 1.08.65 2.03 1.75 2.9-.94.38-1.66 1.19-1.88 2.17-.86-.6-1.65-1.32-2.29-2.14.56-.46.92-1.15.92-1.93C7.5 3.119 6.381 2 5 2S2.5 3.119 2.5 4.5c0 1.14.77 2.1 1.82 2.39.31 1.05.86 2.01 1.6 2.84.5 2.33 2.05 4.31 4.08 5.44v.08c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-.08c2.03-1.13 3.58-3.11 4.08-5.44.74-.83 1.29-1.79 1.6-2.84 1.05-.29 1.82-1.25 1.82-2.39 0-1.381-1.119-2.5-2.5-2.5z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
                isVisible ? "animate-fade-in-right delay-100 opacity-100" : "opacity-0"
              }`}
            >
              Ready to{" "}
              <span className="text-[#D4A017] relative inline-block">
                Adopt!
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

            <p
              className={`text-base sm:text-lg lg:text-xl text-base-content/70 max-w-xl mx-auto lg:mx-0 ${
                isVisible ? "animate-fade-in-right delay-200 opacity-100" : "opacity-0"
              }`}
            >
              Find your perfect furry companion and give a loving pet a safe, happy home with trusted adoption and care support all in one place. 🐾
            </p>

            <div
              className={`${
                isVisible ? "animate-fade-in-right delay-300 opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="/puppies"
                className="btn bg-gray-100 hover:bg-gray-200 text-black border-none px-8 lg:px-10 py-3 text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
              >
                View Puppies
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 pt-8 lg:pt-12 ${
                isVisible ? "animate-fade-in-up delay-400 opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#D4A017]">500+</div>
                <div className="text-sm lg:text-base text-base-content/60 mt-1">Happy Pets</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#D4A017]">150+</div>
                <div className="text-sm lg:text-base text-base-content/60 mt-1">Adoptions</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#D4A017]">24/7</div>
                <div className="text-sm lg:text-base text-base-content/60 mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative ${
              isVisible ? "animate-scale-in delay-200 opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-base-300/30 rounded-full blur-3xl transform scale-75"></div>
              <div className="relative z-10 h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop"
                  alt="Adorable dog ready for adoption"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-base-100"
          ></path>
        </svg>
      </div>

      {/* Animations */}
      <style jsx>{`
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
