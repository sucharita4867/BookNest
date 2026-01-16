import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-[#F4EEE0] py-10">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mainText leading-tight">
          Start Your Reading Journey Today
        </h2>

        <p className="mt-6 text-gray-800 text-lg max-w-2xl mx-auto">
          Discover thousands of books across different categories. Build a daily
          reading habit and explore knowledge that truly matters to you.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="btnPrimary hover:bg-gray-200 transition"
          >
            Explore Books
          </Link>

          <Link
            href="/login"
            className="btnPrimary hover:bg-white hover:text-black transition"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
