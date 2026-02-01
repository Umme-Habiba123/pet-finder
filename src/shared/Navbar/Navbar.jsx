"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  PawPrint,
  Heart,
  Search,
  User,
} from "lucide-react";
// import { useSession } from "next-auth/react";

const Navbar = () => {
  // const { status } = useSession();
  const isLoggedIn = status === "authenticated";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <PawPrint className="w-4 h-4" />
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/find-pets"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Search className="w-4 h-4" />
          Find Pets
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Heart className="w-4 h-4" />
          About Us
        </Link>
      </li>
      {isLoggedIn && (
        <li>
          <Link
            href="/my-adoptions"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <User className="w-4 h-4" />
            My Adoptions
          </Link>
        </li>
      )}
    </>
  );

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Apply dark class for custom styling
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Set both DaisyUI theme and custom dark class
    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 my-3 px-4">
      <div className="navbar bg-base-100/80 backdrop-blur-md shadow-lg rounded-2xl max-w-7xl mx-auto border border-base-300">
        <div className="navbar-start">
          {/* Mobile Hamburger Menu */}
          <div className="dropdown lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="btn btn-ghost btn-circle"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {isMobileMenuOpen && (
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-64 border border-base-300">
                {links}
              </ul>
            )}
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-2">
            <div className="relative">
              <PawPrint className="w-8 h-8 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hidden sm:block">
              PetFinder
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 font-medium">
            {links}
          </ul>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-end gap-2 pr-2">
          {/* Theme Toggle */}
          <div
            className="tooltip tooltip-bottom"
            data-tip={theme === "light" ? "Dark mode" : "Light mode"}
          >
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle swap swap-rotate"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 transition-transform hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 transition-transform hover:rotate-180" />
              )}
            </button>
          </div>

          {/* Auth Buttons */}
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.pravatar.cc/150?img=12" alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300"
              >
                <li>
                  <Link href="/profile" className="font-medium">
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                </li>
                <li>
                  <button className="font-medium text-error">Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/login"
                className="btn btn-ghost btn-sm sm:btn-md rounded-full hidden sm:flex"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn btn-primary btn-sm sm:btn-md rounded-full shadow-lg hover:shadow-xl transition-all gap-2"
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Adopt Now</span>
                <span className="sm:hidden">Adopt</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
