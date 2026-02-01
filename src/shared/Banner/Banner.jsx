"use client";
import React from "react";
// import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Find Your Lost
                <br />
                Pet Today!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
                We're here to help you reunite with your beloved pet or help a
                lost one get back to its owner. Start your search or report a
                found pet today!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  305
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Pets Found
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  10k
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  User Active
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  1k+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Pets News
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative order-1 lg:order-2 w-full">
            {/* Main Image */}
            {/* <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&auto=format&fit=crop&q=80"
                alt="Happy pets - dogs and cats"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div> */}

            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:bottom-0 md:right-0 lg:-bottom-6 lg:-right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-64 sm:w-72 md:w-80 lg:w-96 border border-gray-200 dark:border-gray-700 p-4 sm:p-5 md:p-6">
              {/* Small Image */}
              {/* <div className="mb-3 md:mb-4 rounded-lg md:rounded-xl overflow-hidden aspect-video relative">
                <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&auto=format&fit=crop&q=80"
                  alt="Cute pets group"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div> */}

              <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2">
                Where Pet Love Comes Alive
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                We're here to help you reunite with your beloved pet or help a
                lost one get back to its owner.
              </p>

              <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base hover:gap-3 transition-all">
                See More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
