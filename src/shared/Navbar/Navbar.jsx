"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import NavLink from "@/components/buttons/NavLink";
import Logo from "@/layouts/Logo";
import AuthButtons from "@/components/buttons/AuthButtons";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  const isLoggedIn = status === "authenticated";

  const links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/services"}>Services</NavLink>
      </li>
      {/* <li>
        <NavLink href={"/my-bookings"}>My Bookings</NavLink>
      </li> */}
      {isLoggedIn && (
        <li>
          <NavLink href="/my-bookings">My Bookings</NavLink>
        </li>
      )}
    </>
  );

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // Get theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Apply dark class for custom colors
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

  return (
    <div className="bg-custom-navbar shadow-md sticky top-0 z-50 backdrop-blur-sm rounded-xl my-3 text-custom-primary">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          {/* Mobile Hamburger Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-\[1]\ mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-end gap-2 pr-2 sm:pr-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          {/* Conditional Rendering: Login/Register OR User Profile */}
          {/* {isLoggedIn ? (
            // User Profile Picture with Logout Dropdown
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 sm:w-10 rounded-full ring ring