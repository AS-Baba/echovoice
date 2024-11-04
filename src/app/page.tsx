import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { BestNews } from "./_components/best-news";
import { TopPodcast } from "./_components/top-podcast";
import { BestGenre } from "./_components/best-genre";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <BestNews></BestNews>
   <TopPodcast></TopPodcast>
   <BestGenre></BestGenre>
   <Footer></Footer>
   </>
  );
}
