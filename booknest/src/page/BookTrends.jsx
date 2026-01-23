"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BookTrends = () => {
  return (
    <section className="bg-[#F4EEE0] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            What’s Trending in Books
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl">
            Explore fresh ideas, popular reads, and editorial picks from the
            world of books and literature.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left – Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="group">
              <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src="https://i.ibb.co/SzbJz8q/7fdfa957bd3449306917dee658b415b7.jpg"
                    alt="Trending books"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="mt-6">
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  Collection · Feb 21, 2025
                </span>

                <h3 className="mt-2 text-3xl font-bold text-gray-900 leading-tight">
                  What’s Trending on Bookstore Shelves This Season
                </h3>

                <p className="mt-3 text-gray-600 max-w-2xl">
                  Discover the books readers are talking about—from inspiring
                  non-fiction to creative storytelling shaping today’s reading
                  culture.
                </p>

                <Link
                  href="/book"
                  className="inline-block mt-4 text-sm font-semibold underline underline-offset-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right – Side Articles */}
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
            className="space-y-10"
          >
            {[
              {
                img: "https://i.ibb.co/mrpByPxs/231818bff758a5d3dd60f0c68c8b1d9b.jpg",
                title: "Fresh Book Cover Ideas for Modern Readers",
              },
              {
                img: "https://i.ibb.co/67c8ZgY8/e3cf9dbe8966cfc08352eb88448827ba.jpg",
                title: "Storytelling Ideas to Refresh Your Writing Style",
              },
              {
                img: "https://i.ibb.co/qLFNFrpF/6d567f97847cc9a6d00c26aee81ee0a7.jpg",
                title: "How Reading Habits Are Changing for New Generations",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex gap-5 cursor-pointer hover:opacity-90 transition"
              >
                <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <span className="text-xs uppercase text-gray-500">
                    Collection · Feb 21, 2025
                  </span>
                  <h4 className="mt-2 text-lg font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookTrends;
