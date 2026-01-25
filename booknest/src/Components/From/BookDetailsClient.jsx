"use client";

import React from "react";
import Image from "next/image";
import {
  FaBook,
  FaUser,
  FaStar,
  FaBuilding,
  FaBoxOpen,
  FaLayerGroup,
} from "react-icons/fa";
import Link from "next/link";

import Swal from "sweetalert2";

const BookDetailsClient = ({ book }) => {
  const handleBuy = () => {
    Swal.fire({
      icon: "success",
      title: "Order Complete ",
      text: "Thank you for purchasing this book. Happy reading!",
      confirmButtonColor: "#0F3D2E",
      confirmButtonText: "Continue",
    });
  };
  return (
    <div className="bg-[#FAF7F0] min-h-screen py-10 ">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/book"
          className="inline-block mb-4 text-sm font-medium text-[#0F3D2E] hover:underline"
        >
          ← Back to Books
        </Link>

        <div className="bg-white rounded-2xl shadow-2xl p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative h-[450px] rounded-xl overflow-hidden">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0F3D2E]">
              {book.title}
            </h1>

            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <FaUser />
              <span className="text-lg font-semibold">by {book.author}</span>
            </div>

            <p className="mt-4 text-2xl font-bold text-[#0F3D2E]">
              {book.price}
            </p>

            <p className="mt-5 text-gray-700 leading-relaxed">
              {book.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <FaLayerGroup className="text-[#0F3D2E]" />
                <span>{book.category}</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <FaStar className="text-[#0F3D2E]" />
                <span>{book.rating} Rating</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <FaBook className="text-[#0F3D2E]" />
                <span>{book.pages} Pages</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <FaBuilding className="text-[#0F3D2E]" />
                <span>{book.publisher}</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg col-span-2">
                <FaBoxOpen className="text-[#0F3D2E]" />
                <span>{book.stock} in stock</span>
              </div>
            </div>

            <button
              className="mt-8 btnPrimary px-6 py-3 w-fit"
              onClick={handleBuy}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsClient;
