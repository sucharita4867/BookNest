"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Fiction",
    description: "Stories that spark imagination and creativity",
    icon: "📖",
  },
  {
    title: "Self Development",
    description: "Books to improve mindset and daily habits",
    icon: "🧠",
  },
  {
    title: "Academic",
    description: "Study materials and educational resources",
    icon: "🎓",
  },
  {
    title: "Islamic",
    description: "Spiritual and Islamic knowledge books",
    icon: "🕌",
  },
  {
    title: "Programming",
    description: "Coding, web development and tech books",
    icon: "💻",
  },
  {
    title: "Biography",
    description: "Life stories of inspiring personalities",
    icon: "👤",
  },
];

const BookCategories = () => {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl font-bold text-[#0F3D2E]">
            Explore by Categories
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Find books based on your interests and start reading what truly
            matters to you.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/book"
                className="group block border border-gray-200 rounded-xl p-8 transition hover:shadow-xl"
              >
                {/* Icon animation */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl"
                >
                  {category.icon}
                </motion.div>

                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:underline underline-offset-4">
                  {category.title}
                </h3>

                <p className="mt-2 text-gray-600">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BookCategories;
