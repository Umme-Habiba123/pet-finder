'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navLinks = [
    { name: 'Home', href: '/', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Puppies', href: '/puppies' },
    { name: 'Services', href: '/services' },
    { name: 'Pages', href: '/pages', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <style jsx>{`
        .text-accent-yellow {
          color: #D4A017;
        }
        .text-accent-yellow:hover {
          color: #B8860B;
        }
        .star-icon {
          color: #D4A017;
        }
      `}</style>
      
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-base-100/95 backdrop-blur-md shadow-sm border-base-300' 
            : 'bg-base-100 border-transparent'
        }`}
      >
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative p-2.5 bg-neutral text-neutral-content rounded-xl transform group-hover:scale-105 transition-all duration-300">
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8.5 3C7.119 3 6 4.119 6 5.5S7.119 8 8.5 8 11 6.881 11 5.5 9.881 3 8.5 3zm7 0C14.119 3 13 4.119 13 5.5S14.119 8 15.5 8 18 6.881 18 5.5 16.881 3 15.5 3zM5 9c-1.381 0-2.5 1.119-2.5 2.5S3.619 14 5 14s2.5-1.119 2.5-2.5S6.381 9 5 9zm14 0c-1.381 0-2.5 1.119-2.5 2.5S17.619 14 19 14s2.5-1.119 2.5-2.5S20.381 9 19 9zm-7 2c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.761-2.239-5-5-5z"/>
                </svg>
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-base-content">
               Pet<span className='text-[#D4A017]'>F</span>inder
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <details className="dropdown dropdown-hover">
                      <summary className="btn btn-ghost font-medium text-base text-accent-yellow hover:bg-base-200 transition-colors duration-200 cursor-pointer">
                        <span className="flex items-center gap-1.5">
                          {link.name === 'Home' && <span className="star-icon"></span>}{link.name}
                          <svg className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <ul className="dropdown-content menu bg-base-100 rounded-lg shadow-lg border border-base-300 p-2 w-52 mt-2">
                        <li><Link href={`${link.href}/option1`} className="text-accent-yellow hover:bg-base-200">Option 1</Link></li>
                        <li><Link href={`${link.href}/option2`} className="text-accent-yellow hover:bg-base-200">Option 2</Link></li>
                        <li><Link href={`${link.href}/option3`} className="text-accent-yellow hover:bg-base-200">Option 3</Link></li>
                      </ul>
                    </details>
                  ) : (
                    <Link 
                      href={link.href}
                      className="btn btn-ghost font-medium text-base text-accent-yellow hover:bg-base-200 transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="btn btn-circle btn-ghost hover:bg-base-200 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 fill-current text-accent-yellow" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 fill-current text-accent-yellow" viewBox="0 0 24 24">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
                  </svg>
                )}
              </button>

              {/* Login Button - Desktop */}
              <Link 
                href="/login"
                className="hidden lg:inline-flex btn btn-ghost border border-base-300 hover:bg-base-200 transition-all duration-200 font-medium text-accent-yellow"
              >
                Login
              </Link>

              {/* Registration Button - Desktop */}
              {/* <Link 
                href="/register"
                className="hidden lg:inline-flex btn bg-base-300 hover:bg-base-content hover:text-base-100 border-none transition-all duration-200 font-medium"
              >
                Registration
              </Link> */}

              {/* Call Button - Desktop */}
              {/* <a 
                href="tel:123-456-7890"
                className="hidden lg:inline-flex items-center gap-2 btn bg-base-200 hover:bg-base-300 border border-base-300 transition-all duration-200"
                aria-label="Call us"
              >
                <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <span className="hidden xl:inline text-accent-yellow">123-456-7890</span>
              </a> */}

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <label htmlFor="mobile-drawer" className="btn btn-circle btn-ghost drawer-button hover:bg-base-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className="drawer drawer-end lg:hidden">
          <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side z-50">
            <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
            <div className="menu p-6 w-80 min-h-full bg-base-100 text-base-content border-l border-base-300">
              
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-base-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neutral text-neutral-content rounded-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.5 3C7.119 3 6 4.119 6 5.5S7.119 8 8.5 8 11 6.881 11 5.5 9.881 3 8.5 3zm7 0C14.119 3 13 4.119 13 5.5S14.119 8 15.5 8 18 6.881 18 5.5 16.881 3 15.5 3zM5 9c-1.381 0-2.5 1.119-2.5 2.5S3.619 14 5 14s2.5-1.119 2.5-2.5S6.381 9 5 9zm14 0c-1.381 0-2.5 1.119-2.5 2.5S17.619 14 19 14s2.5-1.119 2.5-2.5S20.381 9 19 9zm-7 2c-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.761-2.239-5-5-5z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold">Menu</span>
                </div>
                <label htmlFor="mobile-drawer" className="btn btn-sm btn-circle btn-ghost">✕</label>
              </div>

              {/* Mobile Navigation Links */}
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    {link.hasDropdown ? (
                      <details className="collapse collapse-arrow bg-base-200 rounded-lg">
                        <summary className="collapse-title font-medium text-base text-accent-yellow">
                          {link.name === 'Home' && <span className="star-icon mr-1">⭐</span>}
                          {link.name}
                        </summary>
                        <div className="collapse-content">
                          <ul className="space-y-1 mt-2">
                            <li><Link href={`${link.href}/option1`} className="block p-3 rounded-lg hover:bg-base-300 transition-colors text-accent-yellow">Option 1</Link></li>
                            <li><Link href={`${link.href}/option2`} className="block p-3 rounded-lg hover:bg-base-300 transition-colors text-accent-yellow">Option 2</Link></li>
                            <li><Link href={`${link.href}/option3`} className="block p-3 rounded-lg hover:bg-base-300 transition-colors text-accent-yellow">Option 3</Link></li>
                          </ul>
                        </div>
                      </details>
                    ) : (
                      <Link 
                        href={link.href}
                        className="block p-4 rounded-lg bg-base-200 hover:bg-base-300 font-medium text-base transition-all duration-200 text-accent-yellow"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Auth Buttons */}
              <div className="mt-6 space-y-3">
                <Link 
                  href="/login"
                  className="btn btn-ghost border border-base-300 w-full hover:bg-base-200 font-medium text-accent-yellow"
                >
                  Login
                </Link>
                <Link 
                  href="/register"
                  className="btn bg-base-300 hover:bg-base-content hover:text-base-100 w-full border-none font-medium"
                >
                  Registration
                </Link>
              </div>

              {/* Mobile Contact Card */}
              <div className="mt-6 p-4 bg-base-200 rounded-lg border border-base-300">
                <div className="text-sm opacity-70 mb-2">Need help?</div>
                <a 
                  href="tel:123-456-7890" 
                  className="flex items-center gap-2 text-base font-bold hover:opacity-70 transition-opacity text-accent-yellow"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  123-456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}