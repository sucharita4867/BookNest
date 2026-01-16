import BookDetailsClient from "@/Components/From/BookDetailsClient";
import Link from "next/link";

const BookDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/book/${id}`, {
    cache: "no-store",
  });

  const book = await res.json();

  if (!book) {
    return <p className="p-10">Book not found</p>;
  }

  return <BookDetailsClient book={book} />;
};

export default BookDetails;
