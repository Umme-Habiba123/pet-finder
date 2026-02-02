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
    <section className="py-20 bg-base-100 dark:bg-neutral transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Header */}
        <p className="text-primary italic mb-2">
          Because We Really Care About Your Pets
        </p>
        <h2 className="text-4xl font-bold mb-12 text-base-content">
          Our Team Members
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="card bg-base-200 dark:bg-base-300 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <figure className="px-6 pt-6">
                <div className="relative w-full h-64 overflow-hidden rounded-xl">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </figure>

              <div className="card-body items-center text-center">
                <h3 className="card-title text-lg">{member.name}</h3>
                <p className="text-sm uppercase tracking-widest text-primary">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3 mt-4">
                  <button className="btn btn-circle btn-sm bg-base-100 dark:bg-neutral hover:bg-primary hover:text-white">
                    <FaFacebookF size={14} />
                  </button>
                  <button className="btn btn-circle btn-sm bg-base-100 dark:bg-neutral hover:bg-primary hover:text-white">
                    <FaTwitter size={14} />
                  </button>
                  <button className="btn btn-circle btn-sm bg-base-100 dark:bg-neutral hover:bg-primary hover:text-white">
                    <FaGooglePlusG size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
