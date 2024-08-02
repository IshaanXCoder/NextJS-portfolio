"use client";


import ThreeDpin from "@/components/threeDpin";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import { EvervaultCardDemo } from "@/components/Socials";
import { ImagesSliderDemo } from "@/components/slider";
import Carousel from '@/components/Carousel';


export default function Home() {
  return (
    <main>
      <HeroParallaxDemo />
      <EvervaultCardDemo />
      <Carousel />

      <ThreeDpin />
      <ImagesSliderDemo />
    </main>
  );
}