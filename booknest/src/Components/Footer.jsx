import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          {/* <h2 className="text-2xl font-bold text-white">BookVerse</h2> */}
          <Link href="/">
            <Logo />
          </Link>
          <p className="mt-3 text-sm leading-relaxed">
            BookVerse is your trusted online library to explore, discover, and
            enjoy hand-picked books for learning, growth, and inspiration.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-white transition">
                Books
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
            <li>
              <Link href="/addBook" className="hover:text-white transition">
                Add Book
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-600
                transition-all duration-300
                hover:scale-110 hover:text-white hover:border-white
              "
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-600
                transition-all duration-300
                hover:scale-110 hover:text-white hover:border-white
              "
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/sucharita-sardar-4866092b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-600
                transition-all duration-300
                hover:scale-110 hover:text-white hover:border-white
              "
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} BookVerse. All rights reserved.
        {new Date().getFullYear()} BookVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
