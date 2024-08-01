// import WavyBackgroundDemo from "@/components/Wavy";
import ThreeDpin from "@/components/threeDpin";

import {HeroParallaxDemo} from "@/components/HeroParallax";
import {EvervaultCardDemo} from "@/components/Socials";
import {ImagesSliderDemo} from "@/components/slider";
import Carousel from '@/components/Carousel';
import {LayoutGridDemo} from '@/components/LayoutGrid';






export default function Home() {
  return (
    <main>
      <HeroParallaxDemo />
      <EvervaultCardDemo />

      <Carousel />
      <LayoutGridDemo />

      <ThreeDpin />
      <ImagesSliderDemo />

      

    </main>
  );
}
