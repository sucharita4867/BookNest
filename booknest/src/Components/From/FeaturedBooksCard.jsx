"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FeaturedBooksCard = ({ books }) => {
  if (!Array.isArray(books) || books.length === 0) {
    return (
      <p className="text-center text-gray-500">No featured books available</p>
    );
  }

  return (
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {books.map((book) => (
        <motion.div
          key={book._id}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8 }} // ✅ lift only
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group bg-white rounded-xl shadow-md hover:shadow-2xl"
        >
          {/* Image zoom only */}
          <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full w-full"
            >
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Content stays stable */}
          <div className="p-5">
            <h3 className="text-lg font-semibold group-hover:text-[#0F3D2E] transition-colors">
              {book.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">by {book.author}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-[#0F3D2E]">₹{book.price}</span>

              <Link href={`/book/${book._id}`} className="btnPrimary">
                View Details
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturedBooksCard;
