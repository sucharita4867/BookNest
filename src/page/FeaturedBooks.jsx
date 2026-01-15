import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";

const FeaturedBooks = () => {
  return (
    <section className="bg-[#FAF7F0] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="mainText">Featured Books</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Discover our handpicked collection of popular and must-read books.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books
            .filter((book) => book.featured)
            .map((book) => (
              <div
                key={book.id}
                className="group bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold group-hover:text-[#0F3D2E]">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    by {book.author}
                  </p>

                  <div className="flex justify-between mt-4">
                    <span className="font-bold">{book.price}</span>
                    <Link href={`/book/${book.id}`} className="btnPrimary">
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
