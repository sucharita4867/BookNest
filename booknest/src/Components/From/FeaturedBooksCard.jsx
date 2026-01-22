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
      animate="visible"
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
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="group bg-white rounded-xl shadow-md hover:shadow-2xl"
        >
          {/* Image animation */}
          <motion.div
            className="relative h-56 w-full overflow-hidden rounded-t-xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="p-5">
            <h3 className="text-lg font-semibold group-hover:text-[#0F3D2E]">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">by {book.author}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">₹{book.price}</span>
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
