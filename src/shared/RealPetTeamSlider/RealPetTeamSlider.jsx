"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Pause,
  Play,
} from "lucide-react";

const RealPetTeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Real images from Unsplash - people with pets, veterinarians, pet care professionals
  const teamMembers = [
    {
      id: 1,
      name: "Mika Doe",
      role: "Adoption Manager",
      // Woman with small dog
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=1000&fit=crop&q=80",
      description:
        "Passionate about connecting pets with loving families for over 8 years",
      petCount: 250,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Jillian Smith",
      role: "Vet Assistant",
      // Woman with cat/dog - veterinary setting
      image:
        "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=800&h=1000&fit=crop&q=80",
      description:
        "Ensuring every pet gets the best medical care and attention",
      petCount: 180,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Laura Smith",
      role: "Veterinarian",
      // Female veterinarian with stethoscope and dog
      image:
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=1000&fit=crop&q=80",
      description:
        "Dedicated to pet health and wellness with 12 years of experience",
      petCount: 320,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "John Anderson",
      role: "Pet Trainer",
      // Man with dog
      image:
        "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=800&h=1000&fit=crop&q=80",
      description: "Helping pets and owners build strong, lasting bonds",
      petCount: 150,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 5,
      name: "Sarah Johnson",
      role: "Shelter Coordinator",
      // Woman holding/cuddling with pet
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=1000&fit=crop&q=80",
      description: "Managing daily operations with care and compassion",
      petCount: 200,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 6,
      name: "Michael Chen",
      role: "Animal Behaviorist",
      // Man with dog outdoors
      image:
        "https://images.unsplash.com/photo-1529472119196-cb724127a98e?w=800&h=1000&fit=crop&q=80",
      description: "Understanding and improving pet behavior for happier lives",
      petCount: 175,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 7,
      name: "Emily Rodriguez",
      role: "Pet Groomer",
      // Woman with fluffy dog
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=1000&fit=crop&q=80",
      description: "Making every pet look and feel their absolute best",
      petCount: 300,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 8,
      name: "David Kim",
      role: "Veterinary Surgeon",
      // Male vet with pet
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=1000&fit=crop&q=80",
      description: "Specialized in advanced surgical procedures for pets",
      petCount: 280,
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
  ];

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused, teamMembers.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const toggleAutoPlay = () => {
    setIsPaused(!isPaused);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      cards.push({ ...teamMembers[index], displayIndex: i });
    }
    return cards;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-base-200 via-base-100 to-base-200 dark:from-base-300 dark:via-base-200 dark:to-base-300 transition-all duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <div className="badge badge-primary badge-lg gap-2 py-4 px-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="font-semibold">Our Team</span>
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-base-content">
                Meet our{" "}
                <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  professionals
                </span>
              </h2>

              <p className="text-lg md:text-xl text-base-content/70 leading-relaxed mb-6">
                We have an experienced qualified team to take care of your best
                friend
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn btn-primary btn-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2">
                VIEW ALL TEAM
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={toggleAutoPlay}
                className="btn btn-circle btn-outline hover:btn-secondary transition-all"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <Play className="w-5 h-5" />
                ) : (
                  <Pause className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-3">
              <button
                onClick={prevSlide}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="btn btn-circle btn-lg btn-outline hover:btn-primary hover:scale-110 transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="btn btn-circle btn-lg btn-outline hover:btn-primary hover:scale-110 transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-base-content/60">
                <span className="font-medium">
                  {currentIndex + 1} / {teamMembers.length}
                </span>
                <span className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${isPaused ? "bg-warning" : "bg-success animate-pulse"}`}
                  />
                  {isPaused ? "Paused" : "Auto-playing"}
                </span>
              </div>
              <div className="w-full bg-base-300 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${((currentIndex + 1) / teamMembers.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Slider Section */}
          <div className="lg:col-span-8">
            {/* Desktop View - 3 Cards */}
            <div className="hidden md:block">
              <div className="relative h-[520px]">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {getVisibleCards().map((member, idx) => (
                    <motion.div
                      key={`${member.id}-${currentIndex}`}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{
                        opacity: idx === 0 ? 1 : 0.7,
                        y: 0,
                        scale: idx === 0 ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`h-full ${idx !== 0 ? "opacity-70" : ""}`}
                    >
                      <div className="card bg-base-100 shadow-xl overflow-hidden h-full group hover:shadow-2xl transition-all duration-300">
                        {/* Image with overlay */}
                        <figure className="relative h-[300px] overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                          {/* Stats Badge */}
                          <div className="absolute top-3 right-3 z-10">
                            <div className="badge badge-primary badge-sm gap-1 shadow-lg backdrop-blur-sm bg-primary/90">
                              <span className="font-bold text-white text-xs">
                                {member.petCount}+
                              </span>
                            </div>
                          </div>

                          {/* Social Links on Hover */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-10">
                            <a
                              href={member.social.facebook}
                              className="btn btn-circle btn-xs bg-white/90 hover:bg-primary hover:text-white border-0 hover:scale-110 transition-all shadow-lg"
                              aria-label="Facebook"
                            >
                              <Facebook className="w-3 h-3" />
                            </a>
                            <a
                              href={member.social.twitter}
                              className="btn btn-circle btn-xs bg-white/90 hover:bg-primary hover:text-white border-0 hover:scale-110 transition-all shadow-lg"
                              aria-label="Twitter"
                            >
                              <Twitter className="w-3 h-3" />
                            </a>
                            <a
                              href={member.social.linkedin}
                              className="btn btn-circle btn-xs bg-white/90 hover:bg-primary hover:text-white border-0 hover:scale-110 transition-all shadow-lg"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="w-3 h-3" />
                            </a>
                          </div>
                        </figure>

                        {/* Card Body */}
                        <div className="card-body p-4">
                          <h3 className="card-title text-xl justify-center font-bold mb-1">
                            {member.name}
                          </h3>
                          <p className="text-center font-semibold text-primary text-base mb-1">
                            {member.role}
                          </p>
                          <p className="text-xs text-center text-base-content/70 leading-relaxed line-clamp-2">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile View - Single Card */}
            <div className="md:hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card bg-base-100 shadow-2xl overflow-hidden">
                  <figure className="relative h-72 overflow-hidden">
                    <img
                      src={teamMembers[currentIndex].image}
                      alt={teamMembers[currentIndex].name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <div className="badge badge-primary gap-2 shadow-lg">
                        <span className="font-bold">
                          {teamMembers[currentIndex].petCount}+
                        </span>
                        <span className="text-xs">Pets</span>
                      </div>
                    </div>
                  </figure>

                  <div className="card-body text-center p-4">
                    <h3 className="card-title text-xl justify-center">
                      {teamMembers[currentIndex].name}
                    </h3>
                    <p className="font-semibold text-primary text-base">
                      {teamMembers[currentIndex].role}
                    </p>
                    <p className="text-xs text-base-content/70 line-clamp-2">
                      {teamMembers[currentIndex].description}
                    </p>
                    <div className="flex justify-center gap-2 mt-3">
                      <a
                        href={teamMembers[currentIndex].social.facebook}
                        className="btn btn-circle btn-xs btn-outline hover:btn-primary"
                      >
                        <Facebook className="w-3 h-3" />
                      </a>
                      <a
                        href={teamMembers[currentIndex].social.twitter}
                        className="btn btn-circle btn-xs btn-outline hover:btn-primary"
                      >
                        <Twitter className="w-3 h-3" />
                      </a>
                      <a
                        href={teamMembers[currentIndex].social.linkedin}
                        className="btn btn-circle btn-xs btn-outline hover:btn-primary"
                      >
                        <Linkedin className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Controls */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="btn btn-circle btn-outline hover:btn-primary transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="btn btn-circle btn-outline hover:btn-primary transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-1.5 mt-6">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "bg-primary w-6 h-2.5"
                      : "bg-base-content/30 w-2.5 h-2.5 hover:bg-base-content/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealPetTeamSlider;
