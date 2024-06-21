"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className=" xl:py-11 h-[84vh] bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none mb-12 xl:mb-36">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              <Typewriter
                words={[
                  "Senior Software Engg.",
                  " Professional Coder.",
                  " Full Stack Developer.",
                  " Mobile App Developer.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
            <h1 className="h1">Hello, my name is Shubham</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what i engage in professionally.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              {/* <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button> */}
            </div>
            {/* social */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge-1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[6rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={5}
              badgeText={"Year Of Experience"}
            />
            {/* badge-2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCounterText={"k"}
              badgeText={"Finished Projects"}
            />
            {/* badge-3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={9}
              endCounterText={"k"}
              badgeText={"Happy Clients"}
            />
            {/* <div className="bg-secodary rounded-full dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute" /> */}
            <DevImg
              containerStyles="rounded-full w-[460px] h-[560px] bg-no-repeat relative bg-bottom shadow-destructive-foreground"
              imgSrc="/hero/shub.webp"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce ">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
