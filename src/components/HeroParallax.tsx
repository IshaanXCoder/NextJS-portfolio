// HeroParallaxDemo.tsx

'use client'
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  const products = [
    
    {
      title: "DeeBakery",
      link: "http://dee-bakery.vercel.app",
      thumbnail: "/images/proj1.png",
    },
    {
      title: "AgroPro",
      link: "AgroPro",
      thumbnail: "/images/proj4.png",
    },
    
    {
      title: "Block Buidlers",
      link: "http://bbwebsite-delta.vercel.app",
      thumbnail: "/images/proj2.png",
    },
    

    {
      title: "Builders Academy",
      link: "http://buidlersacademy.vercel.app",
      thumbnail: "/images/proj3.png",
    },
    {
      title: "AgroPro",
      link: "AgroPro",
      thumbnail: "/images/proj4.png",
    },
    
    {
      title: "Block Buidlers",
      link: "http://bbwebsite-delta.vercel.app",
      thumbnail: "/images/proj2.png",
    },
    
    
    {
      title: "DeeBakery",
      link: "http://dee-bakery.vercel.app",
      thumbnail: "/images/proj1.png",
    },


    {
      title: "Builders Academy",
      link: "http://buidlersacademy.vercel.app",
      thumbnail: "/images/proj3.png",
    },
    {
      title: "Block Buidlers",
      link: "http://bbwebsite-delta.vercel.app",
      thumbnail: "/images/proj2.png",
    }
    
  ];

  return <HeroParallax products={products} />;
}