"use client";
import React from "react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper css
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const reviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Shubham Kumar",
    job: "Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit rerum quo, perferendis hic similique nemo quasi earum vitae harum necessitatibus doloremque? Excepturi iusto dolor quaerat sit a provident ut!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Rishikesh",
    job: "devops",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit rerum quo, perferendis hic similique nemo quasi earum vitae harum necessitatibus doloremque? Excepturi iusto dolor quaerat sit a provident ut!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Amit Kumar",
    job: "front-end developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit rerum quo, perferendis hic similique nemo quasi earum vitae harum necessitatibus doloremque? Excepturi iusto dolor quaerat sit a provident ut!",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Vishes Kumar",
    job: "back-end Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit rerum quo, perferendis hic similique nemo quasi earum vitae harum necessitatibus doloremque? Excepturi iusto dolor quaerat sit a provident ut!",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt="re"
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
