"use client"

import React, { useState, useEffect } from "react";
// import { Link, Link } from "react-router";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
// import logo from "../../assets/logo.png";
// import useAuth from "../../hooks/useAuth";
// import "./NavBar.css";


const NavBar = () => {
  const [theme, setTheme] = useState("light");

  // Get user from auth context
//   const { user, logOut } = useAuth();
//   const isLoggedIn = !!user;

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

  consthrefggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);

//     // Set both DaisyUI theme and custom dark class
//     document.documentElement.setAttribute("data-theme", newTheme);
//     if (newTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

  const links = (
    <>
      <li>
        <Link
         href={"/"}
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-purple-600 text-white dark:bg-orange-500"
              : ""
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
         href={"/books"}
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-purple-600 dark:bg-orange-500 text-white"
              : ""
          }
        >
          Books
        </Link>
      </li>
      <li>
        <Link
         href={"/about"}
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-purple-600 dark:bg-orange-500 text-white"
              : ""
          }
        >
          About-Us
        </Link>
      </li>
      {/* {user && (
        <>
          <li>
            <Link
             href="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-purple-600 dark:bg-orange-500 text-white"
                  : ""
              }
            >
              Contact-Us
            </Link>
          </li>

          <li>
            <Link
             href="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-purple-600 dark:bg-orange-500 text-white"
                  : ""
              }
            >
              Dashboard
            </Link>
          </li>
        </>
      )} */}

      {/* {!user && (
        // <>
        //   <li>
        //     <Link
        //      href="/about"
        //       className={({ isActive }) =>
        //         isActive
        //           ? "font-semibold bg-purple-600 dark:bg-orange-500 text-white"
        //           : ""
        //       }
        //     >
        //       About-Us
        //     </Link>
        //   </li>
        //   {/* <li>
        //     <Link
        //      href="/contact"
        //       className={({ isActive }) =>
        //         isActive
        //           ? "font-semibold bg-purple-600 dark:bg-orange-500 text-white"
        //           : ""
        //       }
        //     >
        //       Contact-Us
        //     </Link>
        //   </li> */}{" "}
    </>
    // )}
    // </>
  );

  return (
    <div className="bg-custom-navbar shadow-md stickyhrefp-0 z-50 backdrop-blur-sm rounded-xl my-3 text-custom-primary">
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
          {/* <Linkhref="/" className="flex items-center gap-2 ml-2 lg:ml-4">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12"
              src={logo}
              alt="BookPilot Logo"
            />
            <span className="font-bold text-lg sm:text-xl hidden sm:inline">
              BookPilot
            </span>
          </Link> */}
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-end gap-2 pr-2 sm:pr-4">
          {/* Themehrefggle */}
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
                <div className="w-9 sm:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.photoURL || "https://i.pravatar.cc/150?img=12"}
                    alt={user?.displayName || "User"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-\[1]\ mt-3 w-40 p-2 shadow-lg"
              >
                <li>
                  <a
                    onClick={() => logOut()}
                    className="text-secondary font-bold"
                  >
                    Logout
                  </a>
                  <Link
                   href={"/dashboard/profile"}
                    className="text-secondary font-bold"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            
            <div className="flex gap-1 sm:gap-2">
              <Link
               href="/login"
                className="btn bg-purple-600 text-white dark:bg-orange-500 dark:border-0 btn-sm text-xs sm:text-sm"
              >
                Login
              </Link>
              <Link
               href="/register"
                className="btn bg-purple-600 dark:bg-orange-500 dark:border-0 btn-sm text-white text-xs sm:text-sm"
              >
                Register
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;