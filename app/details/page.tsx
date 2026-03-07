"use client";

import Image from 'next/image';
import i1 from '../assets/bg4.avif';

export default function Details(){
    return (
      <>
        <div className="bg-[#afdfdf] dark:bg-[#2f2f2f] h-full w-screen grid" >
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
          <div className="h-[40vh] items-center rounded-t-xl hover:shadow-2xl rounded-b-[40%] my-10 bg-[#a7f7f7] text-black dark:bg-[#192919] transition-all duration-700 delay-100 dark:text-[#cdcdcd] font-serif lg:mx-23">
            <p className="p-15 lg:text-3xl text-xl md:text-2xl mb-12 text-center transition delay-100 duration-500">
              We invite you to our wedding at Golden Elm Manor, an enchanting
              place where towering elms meet candlelit pathways. And where our
              next adventure begins.
            </p>
            <button className=" m-auto border grid lg:text-2xl rounded-3xl  text-center px-14 py-4 transition duration-500 ease-in-out bg-[rgba(159,0,100,1)] text-yellow-300 dark:bg-blue-700 hover:shadow-2xl hover:shadow-yellow-400 dark:hover:shadow-cyan-500 text-xl ">
              RSVP
            </button>
          </div>
        </div>
      </>
    );
}