"use client";

import { useState, useEffect } from "react";
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Heart, 
  Home, 
  PawPrint, 
  Info, 
  Phone,
  Search,
  UserCircle,
  Bell
} from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "/adopt", label: "Adopt", icon: <PawPrint className="w-4 h-4" /> },
    { href: "/care", label: "Care", icon: <Heart className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
    { href: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-md" 
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="bg-black p-2 rounded-xl group-hover:scale-105 transition-transform duration-300">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                petFinder
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
              >
                <span className="text-pink-500">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search Bar (Desktop only) */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pets..."
                  className="pl-10 pr-4 py-2 w-48 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Notification & Profile (Desktop only) */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <UserCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </button>

            {/* Adopt Button */}
            <Link
              href="/adopt"
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white px-4 lg:px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-4 h-4" />
              <span className="font-semibold">Adopt Now</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search (Tablet & Mobile) */}
        <div className="lg:hidden py-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for pets, breeds, etc..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-x-0 top-0 z-40 transform transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? "translate-y-16 opacity-100 visible" 
              : "-translate-y-full opacity-0 invisible"
          }`}
        >
          <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-b-2xl border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="text-pink-500">{link.icon}</span>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {link.label}
                  </span>
                </Link>
              ))}
              
              {/* Mobile Additional Actions */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <button className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 w-full">
                  <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Notifications
                  </span>
                  <span className="ml-auto bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                    3
                  </span>
                </button>
                
                <button className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 w-full">
                  <UserCircle className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Profile
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}