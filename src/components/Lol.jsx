import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Lol = () => {
  const head = useRef(null);

  useEffect(() => {
    const e = head.current;
    gsap.fromTo(e, { y: -70 }, { y: 0, duration: 1 });

    // Wrap SplitType initialization in a setTimeout to ensure it runs after the gsap animation
    setTimeout(() => {
      const splitText = new SplitType("#my-text");
      gsap.to(".char", {
        y: 0,
        stagger: 0.03,
        delay: 0.1,
        duration: 0.1,
        scrollTrigger: {
          trigger: ".lol",
        },
      });
    }, 100);
  }, []);

  return (
    <>
      <div className="h-[100dvh] w-full">
        <header
          className="p-3 flex justify-between items-center px-5"
          ref={head}
        >
          <h1>Logo</h1>
          <nav className="space-x-5">
            <a className="font-sans font-medium text-black text-lg" href="">
              Home
            </a>
            <a className="font-sans font-medium text-black text-lg" href="">
              About
            </a>
            <a className="font-sans font-medium text-black text-lg" href="">
              Pricing
            </a>
            <a className="font-sans font-medium text-black text-lg" href="">
              Contact
            </a>
          </nav>
        </header>

        <div className="mt-32 px-5 lol  ">
          <h1 className="text-6xl font-sans font-bold " id="my-text">
            Hello i'm Rahul and im a <br /> front end developer
          </h1>
        </div>
      </div>
    </>
  );
};

export default Lol;
