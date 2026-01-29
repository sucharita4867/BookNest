/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Login check
  useEffect(() => {
    const auth =
      typeof document !== "undefined" && document.cookie.includes("auth=true");
    setIsLoggedIn(auth);
  }, [pathname]);

  // 🔹 Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=; path=/; max-age=0";
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF7F0] shadow-md" : "bg-[#FAF7F0]"
      }`}
    >
      <div className="navbar w-11/12 mx-auto text-black h-16">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
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

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow top-14">
              <li>
                <Link href="/">Home</Link>
              </li>

              {isLoggedIn && (
                <>
                  <li>
                    <Link href="/book">Books</Link>
                  </li>
                  <li>
                    <Link href="/addBook">Add Books</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* ✅ LOGO (Correct way) */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo2.png"
              alt="BookNest Logo"
              width={50}
              height={50}
              priority
            />
            {/* <span className="font-bold text-xl text-[#0F3D2E]">BookNest</span> */}
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>

            {isLoggedIn && (
              <>
                <li>
                  <Link href="/book">Books</Link>
                </li>
                <li>
                  <Link href="/addBook">Add Books</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btnPrimary">
              Logout
            </button>
          ) : (
            <Link href="/login" className="btnPrimary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
