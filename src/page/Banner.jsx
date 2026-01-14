const Banner = () => {
  return (
    <section className="bg-[#EEF4FB] ">
      <div className="py-10 w-11/12 mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between ">
          {/* Left Content */}
          <div className=" text-center md:text-left w-[60%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl w-[70%]   font-bold leading-tight text-[#0F3D2E]">
              Selection of the World’s Best Sellers
            </h1>

            <p className="mt-3 text-gray-600 leading-relaxed w-[90%]">
              Discover a curated collection of globally loved best sellers,
              carefully chosen to inspire readers, spark imagination, and
              deliver unforgettable stories across fiction, non-fiction, and
              timeless classics.
            </p>

            <button className="mt-4 btnPrimary">Login</button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/banner.png"
              alt="Best Seller Books"
              className="w-[280px] md:w-[390px] lg:w-[500px] rotate-[-6deg] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
