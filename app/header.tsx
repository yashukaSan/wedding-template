"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X} from 'lucide-react';
import { useEffect } from 'react';

interface WindowSize{
  width: number ;
  height: number;
}


const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState({
    width: NaN,
    height: NaN,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};


export default function Header (){
  const [isMenu, setIsMenu] = useState(false);
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  
  const linkClass = `
    relative cursor-pointer transition-all duration-300 ease-in-out
    text-white hover:text-[#d0d0d0] font-['Raleway'] tracking-widest text-lg uppercase
    after:content-[''] after:absolute after:left-0 after:bottom-[4px] 
    after:w-0 after:h-[1.5px] after:bg-cyan-400 after:transition-all 
    after:duration-300 after:ease-in-out hover:after:w-full
  `;
  const menuClass =
    "md:flex relative dark:bg-[#8888] col-span-2 bg-[#35aff5] border text-center md:justify-around md:gap-6 font-mono text-xl uppercase";

    useEffect(()=>{
      setShowMenu(screenWidth<768);
    },[screenWidth])

  return (
    <>
      <header className="max-[768]:grid max-[768]:grid-cols-2 flex justify-between fixed w-full z-2 p-4 bg-[#555555]/70 mb-5">
        <h3 className="relative text-lg md:text-3xl text-left text-[#e9e9e9]">
          H&S&nbsp;&nbsp;&nbsp;
          <span className="text-xs md:text-lg">Feb 9th, 2025</span>
        </h3>
        <div>
          <div className={showMenu? "": "hidden"}>
            <Menu
              size={28}
              className={
                isMenu ? "hidden absolute border text-right z-3" : "md:hidden"
              }
              onClick={() => setIsMenu(true)}
            />
            <X
              size={28}
              className={isMenu ? "md:hidden" : "hidden relative z-3"}
              onClick={() => setIsMenu(false)}
            />
          </div>
          <ul
            className={
              isMenu ? menuClass : "hidden md:flex justify-around gap-4"
            }
          >
            <li
              onClick={() => {
                router.push("./");
              }}
              className={linkClass}
            >
              Home
            </li>
            <li
              onClick={() => {
                router.push("./our-story");
              }}
              className={linkClass}
            >
              Our Story
            </li>
            <li
              onClick={() => {
                router.push("./details");
              }}
              className={linkClass}
            >
              details
            </li>
            <li
              onClick={() => {
                router.push("./rsvp");
              }}
              className={linkClass}
            >
              RSVP
            </li>
          </ul>
        </div>
      </header>
      {/* <ul
        className={isMenu ? menuClass : "md:hidden flex justify-around gap-4"}
      >
        <li
          onClick={() => {
            router.push("./");
          }}
          className={linkClass}
        >
          Home
        </li>
        <li
          onClick={() => {
            router.push("./our-story");
          }}
          className={linkClass}
        >
          Our Story
        </li>
        <li
          onClick={() => {
            router.push("./details");
          }}
          className={linkClass}
        >
          details
        </li>
        <li
          onClick={() => {
            router.push("./rsvp");
          }}
          className={linkClass}
        >
          RSVP
        </li>
      </ul> */}
    </>
  );
}
