"use client";

import Image from 'next/image';
import i1 from '../assets/bg4.avif';

export default function Details(){
    return (
      <>
        <div className="h-[70vh] pt-[6vh] flex justify-center text-center">
          <Image
            src={i1}
            alt="image"
            width={1000}
            placeholder="blur"
            height={2000}
            className="absolute w-screen md:w-[80vw] flex  justify-center h-[65vh] z-0"
          />
          <h2 className="z-1 relative  m-auto text-7xl text-[#93069a] uppercase font-mono p-5 font-bold bg-white/40">
            The Details
          </h2>
        </div>
        <div className="h-[40vh] items-center rounded-2xl m-5 bg-[#676767]">
          <p className="p-9 text-5xl mb-12 text-center">
            We invite you to our wedding at Golden Elm Manor, an enchanting
            place where towering elms meet candlelit pathways. And where our
            next adventure begins.
          </p>
          <button className=" m-auto border  grid px-6 text-xl text-center">
            RSVP
        </button>
        </div>
      </>
    );
}