import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const StackedImages: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsToggled((prev) => !prev);
    }, 1000); // Setiap 1 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-center w-full pb-72 mb-10 pr-28 items-center h-auto'>
        <div className="relative w-full  h-full">
      <Image
        width={500}
        height={0}
        src="/dash.png"
        alt="Dark mode"
        className={`absolute w-full h-auto transition-all duration-500 ${
          isToggled ? 'top-20 left-36 z-0' : 'top-0 left-0 z-30'
        }`}
      />
      <Image
        width={500}
        height={0}
        src="/dash1.png"
        alt="Light mode"
        className={`absolute w-full h-auto transition-all duration-500 ${
          isToggled ? 'top-0 left-0 z-0' : 'top-20 left-36 z-10'
        }`}
      />
    </div>
    </div>
    
  );
};

export default StackedImages;
