import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
export default function Hero() {
  return (
    <div class="grid md:grid-cols-2 items-center md:gap-4 gap-8  text-[#333] max-w-5xl max-md:max-w-md mx-auto pt-12">
      <div class="max-md:order-1 max-md:text-center">
        <h3 class="md:text-3xl text-2xl md:leading-10 font-bold">
          BORT SEMPSON
        </h3>
        <p class="mt-4 text-sm font-semibold">
          Launching $BORT SOON ON PUMP FUN AND GET IN TO OUT CHAT 💬 TG CHAT
        </p>
        <div className="pt-6 flex justify-center">
          {" "}
          <a
            href="https://t.me/BORTonsolana"
            className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-[#333] hover:bg-[#333] hover:text-white  transition-all duration-300">
            Buy Now
          </a>
        </div>
      </div>
      <div class="md:h-[450px]">
        <Image
          src={hero}
          alt="hero"
          width={500}
          height={500}
          className="w-full h-full md:object-contain"
        />
      </div>
    </div>
  );
}
