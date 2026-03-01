"use client";
import { useRouter } from 'next/navigation';


export default function Header(){

    const router = useRouter();

    const linkClass = `
    relative cursor-pointer transition-all duration-300 ease-in-out
    text-white hover:text-[#d0d0d0] font-['Raleway'] tracking-widest text-lg uppercase
    after:content-[''] after:absolute after:left-0 after:bottom-[4px] 
    after:w-0 after:h-[1.5px] after:bg-cyan-400 after:transition-all 
    after:duration-300 after:ease-in-out hover:after:w-full
  `;
  

  return (
    <header className="grid fixed w-full z-2 p-4 md:flex md:justify-around bg-[#555555]/70 mb-5">
      <h3 className="text-3xl text-[#e9e9e9]">
        H&S&nbsp;&nbsp;&nbsp;
        <span className="text-lg">Feb 9th, 2025</span>
      </h3>
      <ul className="md:flex md:justify-around md:gap-6 font-mono text-xl uppercase ">
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
    </header>
  );
}