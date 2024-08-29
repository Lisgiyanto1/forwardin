import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const StackedImages: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIsToggled((prev) => !prev);
      }
    }, 1000); // Setiap 1 detik
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="flex justify-center w-full pb-72 mb-10 pr-28 items-center h-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          width={500}
          height={0}
          src="/dash.png"
          alt="Dark mode"
          className={`absolute w-full h-auto transition-all duration-500 ${
            isToggled ? 'top-20 left-36 z-0' : 'top-0 left-0 z-30'
          } ${isHovered ? 'duration-1000' : 'duration-500'}`}
        />
        <Image
          width={500}
          height={0}
          src="/dash1.png"
          alt="Light mode"
          className={`absolute w-full h-auto transition-all duration-500 ${
            isToggled ? 'top-0 left-0 z-0' : 'top-20 left-36 z-10'
          } ${isHovered ? 'duration-1000' : 'duration-500'}`}
        />
      </div>
    </div>
  );
};

export default StackedImages;
