"use client";
import Image from "next/image";
import Link from "next/link";

const ReadingSection = () => {
  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://i.ibb.co/YFGzvWKH/5890007506cffc7ab2a5a840e39d93b3.jpg"
            alt="Person reading a book"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-3xl md:text-4xl mainText leading-tight">
            Reading Opens the Door to <br /> Endless Knowledge
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Books are more than just pages—they are gateways to wisdom,
            imagination, and personal growth. Build a daily reading habit and
            explore ideas that can change your life.
          </p>

          <p className="mt-4 text-gray-600">
            From self-development to academic learning, our collection is
            carefully curated for passionate readers like you.
          </p>

          <Link href="/book" className="mt-4 btnPrimary">
            Explore Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadingSection;
