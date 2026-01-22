"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ReadingImpact = () => {
  return (
    <section className="bg-[#FAF7F0] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-3 text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Reading Culture
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E] leading-tight">
              Turn Reading into a <br /> Daily Advantage
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Successful people read consistently—not occasionally. Our platform
              helps you build a sustainable reading habit by giving you access
              to carefully selected, high-quality books.
            </p>

            <p className="mt-4 text-gray-600">
              Whether you want to grow intellectually, spiritually, or
              professionally, the right book at the right time can redefine your
              journey.
            </p>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="mt-7 grid grid-cols-3 gap-6"
            >
              {[
                { value: "5k+", label: "Books Available" },
                { value: "2k+", label: "Active Readers" },
                { value: "4.9★", label: "Reader Rating" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <h3 className="text-3xl font-bold text-gray-900">
                    {item.value}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-10"
            >
              <Link href="/book" className="btnPrimary">
                Start Reading Today
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://i.ibb.co/8L8mR0fK/460f1b7f3aad5ec7e49ad2781d5ccfc8.jpg"
              alt="Reading improves thinking and focus"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReadingImpact;
