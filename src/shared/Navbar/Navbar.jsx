"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowRoundDown } from "react-icons/io";


export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Puppies", href: "/puppies" },
    { name: "Services", href: "/service" },
    { name: "Pages", href:"/pages", hasDropdown: true,icon: <IoIosArrowDown />  },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-base-100/95 backdrop-blur-md shadow-sm border-base-300"
          : "bg-base-100 border-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2.5 bg-neutral text-neutral-content rounded-xl group-hover:scale-105 transition">
              🐾
            </div>
            <span className="text-2xl lg:text-3xl font-bold text-base-content">
              Pet<span className="text-[#D4A017]">F</span>inder
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <details key={link.name} className="dropdown dropdown-hover">
                  <summary className="btn btn-ghost text-accent-yellow">
                    {link.name} { link.icon}
                  </summary>
                  <ul className="dropdown-content menu bg-base-100 shadow rounded-box w-40">
                    <li><Link href={`${link.href}/option1`}>Add Pet</Link></li>
                    <li><Link href={`${link.href}/option2`}>Get Pet</Link></li>
                    <li><Link href={`${link.href}/option3`}>Foster</Link></li>
                  </ul>
                </details>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="btn btn-ghost text-accent-yellow "
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-ghost"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <Link
              href="/login"
              className="hidden lg:inline-flex btn btn-ghost border border-base-300 text-accent-yellow"
            >
              Login
            </Link>

            {/* Mobile Menu Button */}
            <label htmlFor="mobile-drawer" className="btn btn-circle btn-ghost lg:hidden">
              ☰
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="drawer drawer-end lg:hidden">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-100">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            <li className="mt-4">
              <Link href="/login" className="btn btn-outline w-full">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
