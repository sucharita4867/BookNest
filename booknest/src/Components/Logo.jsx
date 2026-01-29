"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo2.png"
        alt="BookNest Logo"
        width={60}
        height={60}
        priority
      />
    </div>
  );
};

export default Logo;
