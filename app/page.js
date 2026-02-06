import StatsCard from "@/components/Intro/StatsCard";
import Hero from "../components/Intro/Hero";
import GalleryStrip from "@/components/Intro/GalleryStrip";
import Tracks from "@/components/Intro/Tracks";
import BottomCTA from "@/components/Intro/BottomCTA";
import Activities from "@/components/Intro/Activities";
import Annual from "@/components/Intro/Annual";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-12 md:gap-[100px]">
      <Hero>
        <GalleryStrip />
        <StatsCard />
      </Hero>
      <Activities />
      <Annual />
      <Tracks />
      <BottomCTA />
    </main>
  );
}
