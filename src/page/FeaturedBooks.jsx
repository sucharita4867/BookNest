import Image from "next/image";
import Link from "next/link";

const featuredBooks = [
  {
    id: 1,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    price: "₹399",
    image: "https://i.ibb.co/v61Mnx8p/9781524722746.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: "₹450",
    image: "https://i.ibb.co/gLf3HkFF/download.jpg",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    price: "₹499",
    image: "https://i.ibb.co/0RNt2Jr9/download.jpg",
  },
  {
    id: 4,
    title: "Think Like a Monk",
    author: "Jay Shetty",
    price: "₹379",
    image: "https://i.ibb.co/vpj1HrF/xluvo-512.webp",
  },
];

const FeaturedBooks = () => {
  return (
    <section className="bg-[#FAF7F0] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Books
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Discover our handpicked collection of popular and must-read books
            chosen especially for passionate readers.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative h-56 w-full">
                {/* <Imag></Image> */}
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">by {book.author}</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-primary font-bold">{book.price}</span>
                  <Link
                    href={`/books/${book.id}`}
                    className="text-sm font-medium text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
