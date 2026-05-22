import StatsSection from "@/Components/Home/Counter";
import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/hero";
import Pets from "@/Components/Home/Pets";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Features/>
    <Pets/>
    <StatsSection/>
  </div>
  );
}
