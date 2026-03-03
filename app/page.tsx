"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import i2 from "./assets/s6.jpg";
import i3 from "./assets/i1.webp";
import i4 from "./assets/sk4.jpg";
import i5 from "./assets/i4.webp";
import i6 from "./assets/i7.webp";
import i7 from "./assets/office2.jpeg";


export default function Home() {
  
  const router = useRouter();
  const card = "hover:cursor-pointer hover:tranform  hover:translate-[-5px] w-75 xl:w-[40vw] xl:h-[55vh] md:text-3xl md:w-[30vw] my-3 xl:text-4xl h-100 flex justify-center items-center text-2xl rounded-xl underline";

  return (
    <>
      <main className="h-full border">
        <section className="animate-bounce-once flex w-screen text-center pt-10 xl:text-7xl justify-center mt-18 z-1 relative p-3 mb-2 text-2xl md:text-3xl lg:text-5xl lg:p-5 md:mb-5 uppercase font-mono">
          Hitohito Tadano & Shoko Komi
        </section>

        <section className="h-[60vh] items-center justify-center border flex ">
          <Image
            src={i2}
            alt="image"
            width={1000}
            placeholder="blur"
            height={2000}
            className="absolute w-screen h-[60vh] z-0"
          />
          <div className="border animate-bounce-once justify-center p-2 text-xl text-center flex-cols">
            <p className="relative bg-black/50 p-6 md:text-3xl lg:text-4xl capitalize rounded-2xl m-auto z-1 text-2xl">
              With love and gratitude, we invite you to share <br /> in the joy
              of our wedding day.
            </p>
            <br />
            <p className="relative bg-black/45 p-5 md:text-2xl lg:text-3xl capitalize rounded-2xl m-auto z-1 text-xl">
              Tueday, Feb 9, 2025
              <br />
              THE KAWABUN NAGOYA,
              <br />
              Shimonoseki City, Kawanaka, Japan
            </p>
          </div>
        </section>

        <section className=" flex justify-center bg-[#d9d9d0] dark:bg-[#202520]">
          <div className="items-center place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2  grid justify-center">
            <div className={card} onClick={() => router.push("./our-story")}>
              <Image
                src={i3}
                height={100}
                width={200}
                alt=""
                placeholder="blur"
                className="absolute object-contain w-75 xl:w-[40vw] xl:h-[55vh] md:w-[30vw] my-3 h-100"
              />
              <p className="z-1 font-bold">Our Story</p>
            </div>
            <div className={card} onClick={() => router.push("./details")}>
              <Image
                src={i5}
                height={100}
                width={200}
                alt="pic"
                placeholder="blur"
                className="absolute object-contain w-75 xl:w-[40vw] xl:h-[55vh] md:w-[30vw] my-3 h-100"
              />
              <p className="z-1">The Details</p>
            </div>
            <div className={card} onClick={() => router.push("./rsvp")}>
              <Image
                src={i4}
                height={100}
                width={200}
                alt=""
                placeholder="blur"
                className="absolute w-75 xl:w-[40vw] object-contain xl:h-[55vh] md:w-[30vw] my-3 h-100"
              />
              <p className="z-1">RSVP</p>
            </div>
            <div
              className={card + "  flex justify-center md:ml-[66vw] xl:ml-0"}
            >
              <Image
                src={i6}
                height={100}
                width={200}
                alt=""
                placeholder="blur"
                className="absolute w-75 xl:w-[40vw] xl:h-[55vh] object-contain md:w-[30vw] my-3 h-100"
              />
              <p className="z-1">Registry</p>
            </div>
          </div>
        </section>

        <section className="grid h-150">
          <Image
            src={i7}
            height={100}
            width={200}
            alt=""
            placeholder="blur"
            className="absolute z-0 h-150 w-screen object-cover"
          />
          <h2 className="z-1 bg-white/40 py-5 px-12 m-auto text-black text-6xl uppercase font-bold font-mono">
            Registry
          </h2>
          <p className="z-1 rounded-4xl w-[50vw] m-auto bg-black/30 text-center p-5 text-2xl">
            Your presence is the most cherished gift. Should you wish to
            contribute, we&apos;ve created a honeymoon registry to help us
            embark on a memorable adventure to the Shimonoseki City.
          </p>
          <button className="z-1 bg-[rgb(205,200,183)] hover:bg-[#303030] hover:text-[rgb(205,200,183)] border p-4 font-bold text-3xl w-70 m-auto text-[#303030] rounded-lg">
            Go to Registry
          </button>
        </section>
      </main>
    </>
  );
}
