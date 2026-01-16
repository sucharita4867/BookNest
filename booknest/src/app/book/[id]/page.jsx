import { books } from "@/data/books";
import Image from "next/image";
import Link from "next/link";

const BookDetails = async ({ params }) => {
  const { id } = await params;

  const book = books.find((b) => b.id === id);
  console.log(book);

  if (!book) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold">Book not found</h2>
        <Link href="/book" className="btnPrimary mt-2 inline-block">
          Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F0] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/book" className="text-sm hover:underline">
          ← Back to Books
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 grid lg:grid-cols-2 gap-10 mt-4">
          <div className="relative h-[420px] rounded-xl overflow-hidden">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="mt-2 text-gray-600">by {book.author}</p>

            <div className="flex gap-4 mt-4">
              <span className="font-semibold">{book.price}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {book.category}
              </span>
            </div>

            <p className="mt-6 text-gray-700">{book.description}</p>

            <p className="mt-4 text-sm text-gray-500">
              ⭐ Rating: {book.rating} / 5
            </p>

            <button className="btnPrimary mt-6 px-6 py-3">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
