import Image from "next/image";
import Link from "next/link";

const ReadingImpact = () => {
  return (
    <section className="bg-[#FAF7F0] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Reading Culture
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Turn Reading into a <br /> Daily Advantage
            </h2>

            <p className="mt-6 text-lg text-gray-600">
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
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">5k+</h3>
                <p className="text-sm text-gray-500 mt-1">Books Available</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">2k+</h3>
                <p className="text-sm text-gray-500 mt-1">Active Readers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">4.9★</h3>
                <p className="text-sm text-gray-500 mt-1">Reader Rating</p>
              </div>
            </div>

            <Link
              href="/books"
              className="inline-block mt-10 bg-black text-white px-8 py-4 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
            >
              Start Reading Today
            </Link>
          </div>

          {/* Image */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://i.ibb.co/8L8mR0fK/460f1b7f3aad5ec7e49ad2781d5ccfc8.jpg"
              alt="Reading improves thinking and focus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadingImpact;
