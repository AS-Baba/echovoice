import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { BestNews } from "./_components/best-news";
import { TopPodcast } from "./_components/top-podcast";
import { BestGenre } from "./_components/best-genre";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BestNews />
      <TopPodcast />
      <BestGenre />
      <Footer />
    </>
  );
}
