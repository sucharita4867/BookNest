import Image from "next/image";
import Link from "next/link";

const BookPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {
    cache: "no-store",
  });

  const books = await res.json();

  return (
    <div className="bg-[#FAF7F0] min-h-screen py-10">
      <div className="w-11/12 mx-auto">
        <h2 className="mainText mb-6 text-center">All Books</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="
       group
  bg-white rounded-xl
  shadow-md
  transition-all duration-300
  hover:-translate-y-2 hover:shadow-2xl
  flex flex-col
    "
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="
          object-cover
          transition-transform duration-500 ease-out
          group-hover:scale-110
        "
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3
                  className="
          font-semibold text-lg
          transition-colors duration-300
          group-hover:text-[#0F3D2E]
        "
                >
                  {book.title}
                </h3>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">by {book.author}</p>
                  <p className="mt-2 font-bold">₹{book.price}</p>
                </div>

                <Link
                  href={`/book/${book._id}`}
                  className="
                    btn text-white px-6 py-2 rounded-full text-base font-medium bg-[#0C2F24] 
           mt-auto inline-block w-full
          transition-transform duration-300
          group-hover:scale-[1.02]
        "
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
