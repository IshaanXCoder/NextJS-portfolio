import React from 'react';
import { PinContainer } from "./ui/3d-pin";

function ThreeDpin() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="@Ishaan Kesarwani"
        href="http://linkedin.com/in/ishaan-kesarwani/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            LinkedIn
          </h3>
          
          <div 
            className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/images/img1.png")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%', // Ensure height is set
              width: '100%'   // Ensure width is set
            }} 
          />
        </div>
      </PinContainer>
      <PinContainer
        title="@Ishhaaaaaaaan"
        href="https://x.com/Ishhaaaaaaaan"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Twitter(X)
          </h3>
          
          <div 
            className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/images/img2.png")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%', // Ensure height is set
              width: '100%'   // Ensure width is set
            }} 
          />
        </div>
      </PinContainer>
      <PinContainer
        title="@IshaanXCoder"
        href="https://github.com/IshaanXCoder"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Github
          </h3>
          
          <div 
            className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/images/img3.png")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%', // Ensure height is set
              width: '100%'   // Ensure width is set
            }} 
          />
        </div>
      </PinContainer>
    </div>
  );
}

export default ThreeDpin;