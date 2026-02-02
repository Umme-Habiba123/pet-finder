import React from 'react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      date: "13",
      month: "Mar",
      color: "bg-[#D44017]", // Accent color
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800",
      categories: "PET GROOMING, PET SITTING",
      comments: 0,
      title: "Some toughly useful much walking before"
    },
    {
      id: 2,
      date: "14",
      month: "Mar",
      color: "bg-[#D4A017]", // Your specific brand color
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800",
      categories: "PET CARE, PET SITTING",
      comments: 5,
      title: "Acute yellow re-laid less or affirmatively cats"
    },
    {
      id: 3,
      date: "14",
      month: "Mar",
      color: "bg-[#6B21A8]", // Purple accent
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800",
      categories: "PET CARE",
      comments: 0,
      title: "Some toughly useful much walking before"
    }
  ];

  return (
    <section className="relative bg-[#F9F9F9] dark:bg-gray-950 pt-24 pb-20 transition-colors duration-500">
      {/* Torn Paper Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white dark:fill-gray-900">
          <path d="M0,0 L40,20 L80,5 L120,25 L160,10 L200,30 L240,10 L280,25 L320,5 L360,20 L400,5 L440,25 L480,10 L520,30 L560,10 L600,25 L640,5 L680,20 L720,5 L760,25 L800,10 L840,30 L880,10 L920,25 L960,5 L1000,20 L1040,5 L1080,25 L1120,10 L1160,30 L1200,10 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-2 text-[#D4A017]">
             <span className="h-[1px] w-8 bg-current opacity-30"></span>
             <span className="text-xl">🐾</span>
             <span className="h-[1px] w-8 bg-current opacity-30"></span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 italic text-sm mb-2">Because We Really Care About Your Pets</p>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">What's Happening</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group text-left">
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                {/* Date Badge */}
                <div className={`absolute top-4 left-4 ${post.color} text-white w-14 h-14 rounded-full flex flex-col items-center justify-center font-bold shadow-lg`}>
                  <span className="text-lg leading-none">{post.date}</span>
                  <span className="text-xs uppercase leading-none">{post.month}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 mb-3 tracking-widest uppercase">
                <span>📁 {post.categories}</span>
                <span>💬 {post.comments} COMMENT</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-[#D4A017] transition-colors leading-tight">
                {post.title}
              </h3>
              
              <button className="text-[#D4A017] text-xs font-black uppercase tracking-widest border-b-2 border-transparent hover:border-[#D4A017] transition-all pb-1">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;