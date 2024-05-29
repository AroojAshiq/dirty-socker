// components/FloatingButton.js
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FloatingButton() {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = currentScrollPos > 0;
    setVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <div className="fab md:h-[150px] md:w-[150px] h-[100px] w-[100px]">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/discord.svg"
          alt="01"
          className="w-full h-full rounded-full"
        />
      </div>
    )
  );
}
