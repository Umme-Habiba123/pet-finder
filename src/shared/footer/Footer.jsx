"use client";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaYoutube,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaw,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const webLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Service", href: "/service" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  const latestPosts = [
    {
      id: 1,
      title: "Acute Yellow Re-Laid Less Or Affirmatively Cats",
      date: "March 14, 2018",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Acute Yellow Re-Laid Less Or Affirmatively Cats",
      date: "March 14, 2018",
      image:
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop",
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    {
      icon: FaGooglePlusG,
      href: "https://plus.google.com",
      label: "Google Plus",
    },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
    { icon: FaPinterestP, href: "https://pinterest.com", label: "Pinterest" },
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-950 dark:via-stone-900 dark:to-amber-900 text-stone-700 dark:text-stone-300 transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaPaw className="text-white dark:text-amber-950 text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                  Petenica
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  About Your Pets
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              This prodigiously grew tortoise charact stupidly pernicious
              jeepers along while accordingly under useful much salacious
              walking fars before some supp aesthetically wow shuddered.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 hover:from-amber-700 hover:to-orange-700 dark:hover:from-amber-600 dark:hover:to-orange-600 flex items-center justify-center text-white dark:text-amber-50 transition-all duration-300 hover:scale-110 shadow-md"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Web Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-6">
              Web Links
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3">
                {webLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-300 group"
                    >
                      <span className="text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform duration-300 font-bold">
                        ›
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Latest Posts */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-6">
              Latest Post
            </h3>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex space-x-3 group cursor-pointer"
                >
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-stone-200 dark:bg-stone-800 shadow-md ring-2 ring-amber-200 dark:ring-amber-800 transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300 line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <time
                      className="text-xs text-stone-500 dark:text-stone-500 mt-1 block"
                      dateTime={post.date}
                    >
                      {post.date}
                    </time>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-6">
              Contact Info
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start space-x-3 group">
                <FaMapMarkerAlt className="text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  BellSouth, Harley Street Florida 33968
                </p>
              </div>

              <a
                href="tel:+12345678900"
                className="flex items-center space-x-3 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-300 group"
              >
                <FaPhoneAlt className="text-amber-600 dark:text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  +(1) 234 567 8900
                </p>
              </a>

              <a
                href="mailto:example@example.com"
                className="flex items-center space-x-3 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-300 group"
              >
                <FaEnvelope className="text-amber-600 dark:text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  example@example.com
                </p>
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-amber-200 dark:border-amber-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-stone-600 dark:text-stone-400">
            Copyrights {new Date().getFullYear()} PETENICA • All Rights Reserved
          </p>
        </div>
      </div>

      {/* Floating Paw Button */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 dark:from-orange-600 dark:to-red-600 dark:hover:from-orange-500 dark:hover:to-red-500 rounded-full shadow-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-orange-500"
      >
        <FaPaw className="text-2xl" />
      </button>
    </footer>
  );
};

export default Footer;
