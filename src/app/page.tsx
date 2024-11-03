import Image from "next/image";
import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
   </>
  );
}
