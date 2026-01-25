/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth =
      typeof document !== "undefined" && document.cookie.includes("auth=true");

    setIsLoggedIn(auth);
  }, [pathname]);

  const handleLogout = () => {
    document.cookie = "auth=; path=/; max-age=0";
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div className="bg-[#FAF7F0]">
      <div className="navbar w-11/12 mx-auto text-black">
        {/* Navbar Start */}
        <div className="navbar-start">
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

            {/* Mobile Menu */}
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
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

          <Link href="/" className="text-xl">
            <Logo />
          </Link>
        </div>

        {/* Navbar Center (Desktop) */}
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
    </div>
  );
};

export default Navbar;
