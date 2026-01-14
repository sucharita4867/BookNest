import Banner from "@/page/Banner";
import BookTrends from "@/page/BookTrends";
import FeaturedBooks from "@/page/FeaturedBooks";
import ReadingImpact from "@/page/ReadingImpact";
import ReadingSection from "@/page/ReadingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedBooks />
      <ReadingSection />
      <BookTrends />
      <ReadingImpact />
    </div>
  );
}
