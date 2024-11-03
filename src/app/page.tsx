import Image from "next/image";
import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { BestNews } from "./_components/best-news";

export default function Home() {
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   <BestNews></BestNews>
   </>
  );
}
