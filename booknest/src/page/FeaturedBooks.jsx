import Image from "next/image";
import Link from "next/link";

const FeaturedBooks = async () => {
  // console.log(process.env.NEXT_PUBLIC_API_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book/recent`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p className="text-center py-10">Failed to load books</p>;
  }

  const books = await res.json();

  return (
    <section className="bg-[#FAF7F0] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="mainText">Featured Books</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Discover our handpicked collection of popular and must-read books.
          </p>
        </div>

        {books.length === 0 ? (
          <p className="text-center text-gray-500">
            No featured books available
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <div
                key={book._id}
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
                  <p className="text-sm text-gray-500 mt-1">by {book.author}</p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold">{book.price}</span>
                    <Link href={`/book/${book._id}`} className="btnPrimary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedBooks;
