"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const technologies = [
  { name: "Da Vinci Resolve", logo: "/logos/DaVinci.png", link: "https://www.blackmagicdesign.com/products/davinciresolve" },
  { name: "Premiere Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Adobe_Premiere_Pro_Logo.svg", link: "https://www.adobe.com/products/premiere.html" },
  { name: "Lightroom", logo: "https://imgs.search.brave.com/ZajMvRgPnSJC4Yt7QlPJAKxtqUsycGfUlZ_YlB7yW-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L0Fkb2JlX1Bo/b3Rvc2hvcF9MaWdo/dHJvb21fQ0NfbG9n/by5zdmc", link: "https://www.adobe.com/products/photoshop-lightroom.html" },
  { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", link: "https://react.dev/" },
  { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", link: "https://nextjs.org/" },
  { name: "Flask", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg", link: "https://flask.palletsprojects.com/" },
  { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", link: "https://cplusplus.com/" },
  { name: "Solidity", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg", link: "https://soliditylang.org/" },
  { name: "Foundry", logo: "https://book.getfoundry.sh/images/foundry-banner.png", link: "https://book.getfoundry.sh/" },
  { name: "Aave", logo: "https://imgs.search.brave.com/SFhX5fwmAcZVG7nbjgPg54d4ggKejTBI3Vq252myBr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y29pbnBhcGVyLmNv/bS9jb2lucGFwZXIv/Zl93ZWJwLGNfbGlt/aXQsd18zODQwLHFf/YXV0bzpnb29kL2Fh/dmVfYWF2ZV9sb2dv/X2NjNTA4MWRiMTMu/cG5n", link: "https://aave.com/" },
  { name: "Uniswap", logo: "https://imgs.search.brave.com/Sw4VFEgo-si41rungQY56UthbI5A5yCEBCIQptf1SCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcnlw/dGFjaC5vcmcvY3J5/cHRvLWxvZ28vdW5p/c3dhcC11bmktbG9n/by5wbmc", link: "https://uniswap.org/" },
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Section = styled.section`
  background-color: black;
  padding: 40px 0;
  text-align: center;
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  height: 180px;
`;

const CardsWrapper = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 40s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  margin: 0 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 120px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const Carousel: React.FC = () => {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-slate-100 mb-8">
        Technologies & Frameworks I Work On
      </h2>
      <CarouselContainer>
        <CardsWrapper>
          {technologies.concat(technologies).map((tech, index) => (
            <Card key={index}>
            <a href={tech.link} target="_blank" rel="noopener noreferrer">
              <Logo src={tech.logo} alt={tech.name} />
            </a>
          </Card>
          ))}
        </CardsWrapper>
      </CarouselContainer>
    </Section>
  );
};

export default Carousel;