"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const team = [
  {
    name: "Thomas Nick",
    role: "Pet Sitter",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600",
  },
  {
    name: "Lucy Anderson",
    role: "Pet Groomer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
  },
  {
    name: "Daniel Jacob",
    role: "Pet Doctor",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=600",
  },
  {
    name: "James Harry",
    role: "Pet Sitter",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#111111] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Top Subtitle */}
        <p className="text-[#D4A017] italic mb-2">
          Because We Really Care About Your Pets
        </p>

        {/* Main Title */}
        <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
          Our Team Members
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-5 group"
            >
              <div className="relative w-full h-64 mb-5 overflow-hidden rounded-lg">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-lg font-semibold text-black dark:text-white">
                {member.name}
              </h3>

              <p className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-3">
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-[#D4A017] hover:text-white hover:border-[#D4A017] transition">
                  <FaFacebookF size={12} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-[#D4A017] hover:text-white hover:border-[#D4A017] transition">
                  <FaTwitter size={12} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-[#D4A017] hover:text-white hover:border-[#D4A017] transition">
                  <FaGooglePlusG size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
