"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-[#EEF4FB] overflow-hidden">
      <div className="py-10 w-11/12 mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left md:w-[60%]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl md:w-[70%] font-bold leading-tight text-[#0F3D2E]"
            >
              Selection of the World’s Best Sellers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-3 text-gray-600 leading-relaxed md:w-[90%]"
            >
              Discover a curated collection of globally loved best sellers,
              carefully chosen to inspire readers, spark imagination, and
              deliver unforgettable stories across fiction, non-fiction, and
              timeless classics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6"
            >
              <Link href="/login" className="btnPrimary">
                Login
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.img
              src="/banner.png"
              alt="Best Seller Books"
              className="w-[280px] md:w-[390px] lg:w-[500px] drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
