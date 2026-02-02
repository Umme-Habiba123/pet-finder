"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const team = [
  {
    name: "Thomas Nick",
    role: "Pet Sitter",
    img: "https://i.ibb.co.com/B2JK1N2m/Messenger-creation-1850754902032508.jpg",
  },
  {
    name: "Lucy Anderson",
    role: "Pet Groomer",
    img: "https://i.ibb.co.com/ttynVJ1/875ca1d9-8b57-4c3c-84f3-17bd1e129f85.jpg",
  },
  {
    name: "Daniel Jacob",
    role: "Pet Doctor",
    img: "https://i.ibb.co.com/rfQHnV3M/325791975-1317271512454522-9114919137207257526-n.jpg",
  },
  {
    name: "James Harry",
    role: "Pet Sitter",
    img: "https://i.ibb.co.com/Fq3JtJbN/Messenger-creation-822982186256342.jpg",
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
