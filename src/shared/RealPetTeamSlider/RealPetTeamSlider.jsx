"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const RealPetTeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Real images from Unsplash - people with pets
  const teamMembers = [
    {
      id: 1,
      name: "Mika Doe",
      role: "Adoption manager",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=800&fit=crop&q=80",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Meghan Smith",
      role: "Cat Specialist",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=800&fit=crop&q=80",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Jillian Smith",
      role: "Vet Assistant",
      image:
        "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=600&h=800&fit=crop&q=80",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "Laura Smith",
      role: "Veterinarian",
      image:
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=800&fit=crop&q=80",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 5,
      name: "John Anderson",
      role: "Pet Trainer",
      image:
        "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=600&h=800&fit=crop&q=80",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
    {
      id: 6,
      name: "Sarah Johnson",
      role: "Shelter Coordinator",
      image:
        "https://images.unsplash.com/photo-1529472119196-cb724127a98e?w=600&h=800&fit=crop&q=80",
      social: { facebook: "#", twitter: "#", linkedin: "#" },
    },
  ];

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      cards.push(teamMembers[index]);
    }
    return cards;
  };

  return (
    <section className="py-16 px-4 dark:bg-gray-900 transition-all duration-300 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight dark:text-white mb-6">
                Meet our professionals
              </h2>

              <p className="text-base text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                We have an experienced qualified team to take care of your best
                friend
              </p>

              {/* a button */}

              <button className="bg-gray-100 hover:bg-gray-200 text-black px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
                VIEW ALL TEAM
              </button>
            </motion.div>
          </div>

          {/* Right Slider Section */}
          <div className="lg:col-span-9">
            {/* Desktop View - 3-4 Cards */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getVisibleCards().map((member, idx) => (
                  <motion.div
                    key={`${member.id}-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-gray-200 dark:bg-gray-700">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold dark:text-white text-center mb-1">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className="text-[#00A8E8] font-medium text-sm text-center mb-3">
                      {member.role}
                    </p>

                    {/* Divider Line */}
                    <div className="w-12 h-[2px] bg-gray-300 dark:bg-gray-600 mx-auto mb-3"></div>

                    {/* Social Icons */}
                    <div className="flex justify-center items-center gap-3">
                      <a
                        href={member.social.facebook}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors duration-200"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-[18px] h-[18px]" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors duration-200"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-[18px] h-[18px]" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-[18px] h-[18px]" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile View - 1 Card */}
            <div className="sm:hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-sm mx-auto"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-gray-200 dark:bg-gray-700">
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">
                  {teamMembers[currentIndex].name}
                </h3>

                <p className="text-[#00A8E8] font-medium text-base text-center mb-3">
                  {teamMembers[currentIndex].role}
                </p>

                <div className="w-12 h-[2px] bg-gray-300 dark:bg-gray-600 mx-auto mb-3"></div>

                <div className="flex justify-center items-center gap-4">
                  <a
                    href={teamMembers[currentIndex].social.facebook}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={teamMembers[currentIndex].social.twitter}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={teamMembers[currentIndex].social.linkedin}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-10">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "bg-[#D91E6A] w-8 h-2"
                      : "bg-gray-300 dark:bg-gray-600 w-2 h-2 hover:bg-gray-400 dark:hover:bg-gray-500"
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
