import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="carousel w-full h-[70vh]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full bg-[#FAF7F0]">
        <div className="flex flex-col justify-center items-center text-center w-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to BookNest 📚
          </h1>
          <p className="max-w-xl text-gray-600 mb-6">
            Discover thousands of books from your favorite authors.
          </p>
          <Link href="/book" className="btn btn-primary">
            Explore Books
          </Link>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full bg-[#E8F0FE]">
        <div className="flex flex-col justify-center items-center text-center w-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Read. Learn. Grow.
          </h1>
          <p className="max-w-xl text-gray-600 mb-6">
            Build your knowledge with our curated book collection.
          </p>
          <Link href="/book" className="btn btn-secondary">
            Browse Collection
          </Link>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full bg-[#FFF7E6]">
        <div className="flex flex-col justify-center items-center text-center w-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Reading Journey Starts Here
          </h1>
          <p className="max-w-xl text-gray-600 mb-6">
            Find books that inspire, educate, and entertain.
          </p>
          <Link href="/addBook" className="btn btn-accent">
            Add a Book
          </Link>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
