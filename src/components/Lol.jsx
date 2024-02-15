import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Lol = () => {
  const head = useRef(null);
  useEffect(() => {
    const e = head.current;
    gsap.fromTo(e, { y: -70 }, { y: 0, duration: 1 });
  }, []);

  const para = useRef(null);
  useEffect(() => {
    const e = para.current;
    gsap.fromTo(e, { y: 400 }, { y: 0, duration: 1, delay: 0.5 });
    // gsap.from(e, { yPercent: 130 });
  });
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

        <div className=" mt-32 px-5 border-blue-300 border-[1px]" ref={para}>
          <h1 className="text-6xl font-sans font-bold ">
            Hello i'm Rahul and im a <br /> front end developer
          </h1>
        </div>
      </div>
    </>
  );
};

export default Lol;
