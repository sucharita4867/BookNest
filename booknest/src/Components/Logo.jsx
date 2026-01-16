import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center ">
      <Image
        src="/logo2.png"
        alt="BookNest Logo"
        width={80}
        height={80}
        priority
      />
      {/* <span className="text-xl font-bold">BookNest</span> */}
    </div>
  );
};

export default Logo;
