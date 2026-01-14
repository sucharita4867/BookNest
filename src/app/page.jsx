import Banner from "@/page/Banner";
import FeaturedBooks from "@/page/FeaturedBooks";
import ReadingSection from "@/page/ReadingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedBooks />
      <ReadingSection />
    </div>
  );
}
