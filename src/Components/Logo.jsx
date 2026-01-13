import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="BookNest Logo"
        width={40}
        height={40}
        priority
      />
      <span className="text-xl font-bold">BookNest</span>
    </div>
  );
};

export default Logo;
