import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div>
      <Hero />
      <Newest />
    </div>
  );
}
