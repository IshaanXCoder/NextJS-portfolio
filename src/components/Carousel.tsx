"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';

const languages = [
  { name: 'HTML', logo: '/logos/HTML.png' },
  { name: 'CSS', logo: '/logos/CSS.png' },
  { name: 'JavaScript', logo: '/logos/JS.png' },
  { name: 'React', logo: '/logos/React.png' },
  { name: 'Next.js', logo: '/logos/nexttjs.png' },
  { name: 'Node.js', logo: '/logos/Node.webp' },
  { name: 'C++', logo: '/logos/CPP.png' },
  { name: 'Da Vinci Resolve', logo: '/logos/DaVinci.png' },
  { name: 'Premiere Pro', logo: '/logos/PremPro Background r.png' },
  { name: 'Lightroom', logo: '/logos/Lightroom.png' },
  { name: 'HTML', logo: '/logos/HTML.png' },
  { name: 'CSS', logo: '/logos/CSS.png' },
  { name: 'JavaScript', logo: '/logos/JS.png' },
  { name: 'React', logo: '/logos/React.png' },
  { name: 'Next.js', logo: '/logos/nexttjs.png' },
  { name: 'Node.js', logo: '/logos/Node.webp' },
  { name: 'C++', logo: '/logos/CPP.png' },
  { name: 'Da Vinci Resolve', logo: '/logos/DaVinci.png' },
  { name: 'Premiere Pro', logo: '/logos/PremPro Background r.png' },
  { name: 'Lightroom', logo: '/logos/Lightroom.png' },
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const Section = styled.section`
  background-color: black;
  padding: 40px 0;
  text-align: center;
`;

const Heading = styled.h2`
  color: white;
  font-size: 2em;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  height: 200px;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 200px;
    z-index: 1;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  animation: ${scroll} 36s linear infinite; /* Slowed down by 20% */
  &:hover {
    animation-play-state: paused; /* Pause animation on hover */
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  margin: 0 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 150px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Carousel: React.FC = () => {
  return (
    <Section>
      <Heading>Technologies and Software I Use</Heading>
      <CarouselContainer>
        <CardsWrapper>
          {languages.concat(languages).map((language, index) => (
            <Card key={index}>
              <Logo src={language.logo} alt={language.name} />
            </Card>
          ))}
        </CardsWrapper>
      </CarouselContainer>
    </Section>
  );
};

export default Carousel;