import FeaturedBooksCard from "@/Components/From/FeaturedBooksCard";
import Image from "next/image";


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

       <FeaturedBooksCard books={books}/>
      </div>
    </section>
  );
};

export default FeaturedBooks;
