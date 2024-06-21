import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="font-bold text-[64px] text-primary font-serif">
        S<span className="text-secondary dark:text-white">D</span>
      </h1>
    </Link>
  );
};

export default Logo;
