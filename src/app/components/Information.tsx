import React from "react";
import { useAppContext } from "../ContextApi";
import Image from "next/image";

interface ResultProps {
  weight: string;
  height: string;
}

export function Result({ weight, height }: ResultProps) {
  return (
    <div className="flex flex-col w-screen">
      <div className="relative w-full h-[80px] bg-[#9DDF3E]">
        <div className="absolute inset-0 flex items-end px-3">
          <div className="flex flex-1 justify-center">
            <div className="text-lg font-semibold">myLIFE CONNEXT</div>
          </div>
          <div className="flex-shrink-0 ml-auto">
            <Image
              src="/ic_textbox_clear.svg"
              alt="exit"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[56px] bg-[#9DDF3E] text-3xl text-[#4E4E4E] rounded-bl-full rounded-br-full"></div>
      <div className="ml-4 mt-4 md:mt-8 text-[#9DDF3E] text-xl md:text-2xl font-semibold">
        I am
      </div>
      <div className="ml-4 mt-2 md:mt-4 text-[#4E4E4E] text-2xl md:text-3xl font-bold">
        Juggree chobchai
      </div>
      <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center w-full max-w-sm mx-auto text-lg text-[#9DDF3E] bg-[#F9FDEA] rounded-xl p-4">
        <div className="mb-2 md:mb-0">Weight:</div>
        <div>{weight}</div>
      </div>
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-between items-center w-full max-w-sm mx-auto text-lg text-[#9DDF3E] bg-[#F9FDEA] rounded-xl p-4">
        <div className="mb-2 md:mb-0">Height:</div>
        <div>{height}</div>
      </div>
    </div>
  );
}
