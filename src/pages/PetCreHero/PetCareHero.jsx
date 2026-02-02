import React from 'react';

const PetCareHero = () => {
  const stats = [
    { id: 1, icon: "🦴", count: "748", label: "Pet Adoptions" },
    { id: 2, icon: "🐱", count: "3560", label: "Pet Adoptions" },
    { id: 3, icon: "🐕", count: "5674", label: "Pet Adoptions" },
    { id: 4, icon: "✂️", count: "6789", label: "Pet Adoptions" },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ১. মেইন ব্যাকগ্রাউন্ড সেকশন (Cat Image + Dark Overlay) */}
      <div className="relative h-[500px] md:h-[600px] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop')", // এখানে আপনার বিড়ালের ইমেজ পাথ দিন
          }}
        />
        {/* Dark Overlay - ছবির ওপর হালকা কালো আস্তর */}
        <div className="absolute inset-0 bg-black/60 shadow-inner" />

        {/* ২. টেক্সট কন্টেন্ট */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-20">
          <h2 className="text-white text-2xl md:text-4xl font-serif italic opacity-90">
            We Offers The Best
          </h2>
          <h1 className="text-white text-4xl md:text-6xl font-bold mt-2 tracking-tight">
            Pet Care Solutions
          </h1>
        </div>

        {/* ৩. ছেঁড়া কাগজের মতো ইফেক্ট (Torn Paper Bottom) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg 
            className="relative block w-full h-[50px] md:h-[80px]" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 L40,20 L80,5 L120,25 L160,10 L200,30 L240,10 L280,25 L320,5 L360,20 L400,5 L440,25 L480,10 L520,30 L560,10 L600,25 L640,5 L680,20 L720,5 L760,25 L800,10 L840,30 L880,10 L920,25 L960,5 L1000,20 L1040,5 L1080,25 L1120,10 L1160,30 L1200,10 L1200,120 L0,120 Z" 
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* ৪. ফ্লোটিং কার্ড (Floating Stats Card) */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 md:-mt-32 relative z-30 shadow-2xl shadow-white  ">
        <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center group">
                {/* Icon with Dashed Border */}
                <div className="w-16 h-16 border-2 border-dashed border-[#D4A017] rounded-md flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <span className="text-3xl" style={{ color: '#D4A017' }}>{stat.icon}</span>
                </div>
                {/* Number */}
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.count}</h3>
                {/* Label */}
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* নিচের সাদা অংশ বাড়ানোর জন্য */}
      <div className="h-20 bg-white" />
    </section>
  );
};

export default PetCareHero;