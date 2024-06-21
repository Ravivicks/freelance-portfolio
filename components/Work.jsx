"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// components
import ProjectCard from "./ProjectCard";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper css
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const projectData = [
  {
    image: "/work/w1.png",
    category: "react js",
    name: "Snapgram social media app",
    description:
      "Specialize in developing engaging and intuitive social media apps that connect users seamlessly.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w2.png",
    category: "next js",
    name: "digitalhippo e-commerce ",
    description:
      "Excel in crafting robust e-commerce platforms that enhance user experience and drive online sales effectively",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w3.jpg",
    category: "full stack",
    name: "SMC tradeonline Admin",
    description:
      "Specialize in developing intuitive trading admin platforms that streamline operations and empower users with powerful analytical tools.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w4.jpg",
    category: "React js",
    name: "SMC Tradeonline portal",
    description:
      "Specialize in developing user-friendly trading platforms similar to Groww, offering seamless investment experiences and comprehensive financial management tools.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w5.jpg",
    category: "React js",
    name: "Stoxkart web trading",
    description:
      "Build a seamless stock trading platform with our comprehensive API for easy stock buying, selling, and live streaming integration.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w7.jpg",
    category: "Full stack",
    name: "SMC Partner portal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa architecto nostrum eos",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w6.jpg",
    category: "React js",
    name: "Stoxkart Rekyc portal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa architecto nostrum eos",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Crafted with React, Next.js, and Tailwind CSS, my project
            exemplifies my proficiency in front-end development. By harnessing
            Node.js, I’ve seamlessly integrated dynamic features, ensuring an
            engaging user experience across both desktop and mobile devices.
            Additionally, I’ve explored mobile app development using React
            Native and Flutter, enhancing my versatility in creating
            cross-platform solutions.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            // className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slide */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
