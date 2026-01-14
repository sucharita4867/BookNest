import Banner from "@/page/Banner";
import BookCategories from "@/page/BookCategories";
import BookTrends from "@/page/BookTrends";
import CTASection from "@/page/CTASection";
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
      <BookCategories />
      <CTASection />
    </div>
  );
}
