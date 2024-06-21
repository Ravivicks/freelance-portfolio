import Image from "next/image";
import React from "react";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        // objectFit="contain"
        // width={400}
        // height={400}
        fill
        priority
        alt="dev"
        // className="rounded-full"
      />
    </div>
  );
};

export default DevImg;
