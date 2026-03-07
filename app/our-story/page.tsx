import Image from "next/image";

import i1 from "../../public/kt1.webp";
import i2 from "../../public/komi1.webp";
import i3 from "../../public/tadano.jpg";

export default function OurStory() {
  return (
    <>
      <section className=" grid w-screen justify-center bg-[#d5e5e5] dark:bg-[#2f2f2f] ">
        <div className="border bg-[#dadada] dark:bg-[#9f7e85] mt-40 w-[70vw] mb-12 xl:w-[45vw] lg:w-[50vw] xl:h-[70vh] h-[50vh] grid justify-center m-auto border-black px-2 py-4 tranform rotate-15">
          <Image
            src={i1}
            height={100}
            width={750}
            placeholder="blur"
            alt="We Together"
            className="obbject-contain mt-10 "
          />
          <hr className="text-3xl font-bold mt-2 text-black " />
          <p className="md:text-3xl antialiased font-black text-black justify-center flex">
            11/05/2021
          </p>
        </div>
        <div className="text-black transition delay-200 duration-500 ease-in-out hover:bg-olive-500 dark:bg-olive-500 uppercase bg-orange-300 dark:hover:bg-orange-300 p-8 bg- grid justify-center rounded-4xl">
          <p className="m-auto font-bold text-3xl italic underline">
            When Two Shy Wed
          </p>
          <article className="text-center font-serif w-[50vw] p-6 font-stretch-normal hover:bg-slate-500 dark:bg-slate-500 duration-800 dark:hover:bg-red-300 dark:hover:text-black bg-red-300 rounded-3xl text-xl dark:text-yellow-200 hover:text-yellow-200 ">
            <p>
              We met each other at High School, you sat next to me and you were
              the goddess of the school while I&apos;m just an ordinary boy,
              average at evry fied. Our First converssation start o the
              classroom board when I notice about your Communication Disorder.
              Then we make taget of majing 100 friends. We then in the
              first-year, start connecting with the new poeple, and talking with
              and understanding each other better. Then in the second year we
              start hangng out with each other a lot. And Finally in the Thrid
              yaer , I propose you on the Valintine day.{" "}
            </p>
            <br />
            <p>
              We chose our path for pur better future while stay in contact with
              other. Irrespective of our distance we keep our communication as
              normal as we do in face to face.
              <br />
              We <span className="font-black">LOVE</span> each other{" "}
              <span className="font-black">: )</span>
            </p>
          </article>
        </div>

        <div className="flex mb-11">
          <div className="p-3 w-[45vw] h-[50vh] md:h-[80vh] dark:bg-[#0f0a05] flex xl:w-[25vw] lg:w-[35vw] bg-[#d5d5d5] tranform mt-10 items-center justify-center z-1 rotate-[-10deg] ">
            <Image
              src={i2}
              height={100}
              width={450}
              placeholder="blur"
              alt="We Together"
              className="relative obbject-contain "
            />
          </div>
          <div className=" p-3 w-[45vw] h-[50vh] md:h-[80vh] bg-[#d5d5d5] dark:bg-[#0f0e05] mt-10 tranform xl:w-[25vw] lg:w-[35vw] rotate-10 ">
            <Image
              src={i3}
              height={100}
              width={450}
              placeholder="blur"
              alt="We Together"
              className="relative obbject-contain "
            />
          </div>
        </div>
        <div className="grid hover:text-white justify-center bg-[#ff673a]/20 p-3 transition-all delay-0 duration-600 hover:bg-olive-700 ease-in-out text-yellow-500 rounded-4xl hover:mb-4 hover:shadow-red-500 shadow-2xl">
          <div className="p-5 text-center text-xl">
            <p>
              It feels right to celebrate surrounded by the people who get us.
              <br />
              We&apos;re stoked to start this next chapter with you.
            </p>
            <p>Onwards and upward to the adventure!</p>
          </div>
          <button className="text-black font-bold font-serif transition duration-500 delay-0 hover:bg-[#ff673a]/60 border-[#ff673a]/20 border-5 text-xl bg-olive-400 mb-10 mt-3 w-[30vw] m-auto  rounded-full p-3">
            RSVP
          </button>
        </div>
      </section>
    </>
  );
}
