import Image from "next/image";

import i1 from "../../public/kt1.webp";
import i2 from "../../public/komi1.webp";
import i3 from "../../public/tadano.jpg";

export default function OurStory() {
  return (
    <>
      <section className=" grid w-screen justify-center bg-[#d5e5e5] ">
        <div className="border bg-[#dadada] mt-40 w-[70vw] mb-12 xl:w-[45vw] lg:w-[50vw] xl:h-[70vh] h-[50vh] grid justify-center m-auto border-black px-2 py-4 tranform rotate-15">
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
        <div className="text-black grid justify-center">
          <p>When Two Shy Wed</p>
          <article className="text-center w-[50vw] font-stretch-normal">
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
          <div className="p-3 w-[45vw] h-[50vh] md:h-[80vh] flex xl:w-[25vw] lg:w-[35vw] bg-[#d5d5d5] tranform mt-10 items-center justify-center z-1 rotate-[-10deg] ">
            <Image
              src={i2}
              height={100}
              width={450}
              placeholder="blur"
              alt="We Together"
              className="relative obbject-contain "
            />
          </div>
          <div className=" p-3 w-[45vw] h-[50vh] md:h-[80vh] bg-[#d5d5d5] mt-10 tranform xl:w-[25vw] lg:w-[35vw] rotate-10 ">
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
        <div className="grid justify-center bg-[#ff673a]/20 p-3 ">
          <div className="text-black p-4 text-center ">
            <p>
              It feels right to celebrate surrounded by the people who get us.
              <br />
              We&apos;re stoked to start this next chapter with you.
            </p>
            <p>Onwards and upward to the adventure!</p>
          </div>
          <button className="text-olive-300 bg-olive-700 mb-10 mt-3 w-[30vw] m-auto  rounded-full p-3">
            RSVP
          </button>
        </div>
      </section>
    </>
  );
}
