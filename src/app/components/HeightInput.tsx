import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeightInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const HeightInput: React.FC<HeightInputProps> = ({
  input,
  setInput,
  handleSubmit,
}) => {
  const router = useRouter();
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-screen">
      <div className="relative w-full h-[80px] bg-[#9DDF3E]">
        <div className="absolute inset-0 flex items-end mx-3">
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
      <div className="w-full h-[56px] bg-[#9DDF3E] text-3xl text-[#4E4E4E] rounded-bl-full rounded-br-full">
        <div className="ml-4" onClick={() => router.back()}>
          &lt;
        </div>
      </div>
      <div className="ml-4 mt-4 text-[#9DDF3E] text-2xl font-semibold">
        I am
      </div>
      <div className="ml-4 mt-2 text-[#4E4E4E] text-3xl font-bold">
        Juggree chobchai
      </div>
      <div className="mt-32 flex flex-row justify-between items-center w-[334px] h-[56px] text-lg text-[#9DDF3E] bg-[#F9FDEA] mx-auto rounded-xl">
        <div className="ml-4">Please select your height</div>
        <div className="mr-4">2/2</div>
      </div>
      <div className="relative flex flex-row justify-center mt-32">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          className="border-2 border-[#9DDF3E] w-[334px] h-[60px] rounded-xl text-center"
        />
        <Image
          src="/height.svg"
          alt="height"
          width={30}
          height={30}
          className="absolute right-16 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <div className="w-full flex justify-end mt-40 mb-6">
        <button
          className={`w-[136px] h-[48px] mr-10 text-white font-bold text-lg rounded-full ${
            input ? "bg-[#9DDF3E]" : "bg-gray-400 cursor-not-allowed"
          }`}
          type="submit"
          disabled={!input}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default HeightInput;
