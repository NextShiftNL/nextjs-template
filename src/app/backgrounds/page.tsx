"use client";
import React from "react";
import { BackgroundLines } from "../../themes/components/ui/backgrounds-aceternity/background-lines";
import { BackgroundBeamsWithCollision } from "@/themes/components/ui/backgrounds-aceternity/background-beams-with-collision";
import { SparklesCore } from "@/themes/components/ui/backgrounds-aceternity/sparkles";

export default function Page() {
  return (
    <div className="h-screen">
      <BackgroundLines className="h-screen flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Background, <br /> with lines.
        </h2>
      </BackgroundLines>
      <BackgroundBeamsWithCollision className="h-screen">
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <h2 className="text-9xl">Exploding beams.</h2>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <h2 className="text-9xl">Exploding beams.</h2>
            </div>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
      <div className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md h-screen">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Sparkles
        </h1>
      </div>
    </div>
  );
}
