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
          🐈‍⬛ A random guy obsessed with green dots @<a href="https://www.github.com/IshaanXCoder" target="_blank" rel="noopener noreferrer">Github</a><br />
          📈 Learning DSA in C++
          </h2>
        </div>

        {/* Card 2 */}
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem] text-white">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
  
          <EvervaultCard text="About" />
  
          <h2 className="dark:text-white text-black mt-4 text-sm font-light py-3">
            🌟 Passionate about web development <br />
            🛠️ Building projects with React and Next.js!
          </h2>
        </div>

        {/* Card 3 */}
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem] text-white">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
  
          <EvervaultCard text="Me!" />
  
          <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          🚀 Excited to collaborate on innovative projects and explore new opportunities.<br />
          </h2>
        </div>

      </div>
    </main>
  );
}