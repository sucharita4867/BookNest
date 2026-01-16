import Link from "next/link";

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
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-[#0F3D2E]">
            Explore by Categories
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Find books based on your interests and start reading what truly
            matters to you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="/book"
              className="group border border-gray-200 rounded-xl p-8 hover:shadow-lg transition"
            >
              <div className="text-4xl">{category.icon}</div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:underline">
                {category.title}
              </h3>

              <p className="mt-2 text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCategories;
