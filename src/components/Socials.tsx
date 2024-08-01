import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <main>

      <div className="flex justify-center space-x-4 p-4">

        
        {/* Card 1 */}
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem] text-white">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
  
          <EvervaultCard text="More" />
  
          <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            A random guy obsessed with green dots @<a href="www.github.com/IshaanXCoder">Github</a>
                          </h2>
        </div>

        {/* Card 2 */}
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem]  text-white">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
  
          <EvervaultCard text="About" />
  
          <h2 className="dark:text-white text-black mt-4 text-sm font-light py-3">
          💻Self-taught Web Developer <br /> 🚀Implementing React and NEXT.js skills!
          </h2>
        </div>

        {/* Card 3 */}
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem]  text-white">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
  
          <EvervaultCard text="Me   " />
  
          <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            Tweet at us on Twitter.
          </h2>
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Twitter
          </p>
        </div>
      </div>
    </main>
  );
}