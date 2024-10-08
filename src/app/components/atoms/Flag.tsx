import Image from 'next/image';
import React from 'react';

const Flag: React.FC = () => {
  return (
    <>
      <Image
        src="/images/flag.png"
        width={25}
        height={18}
        className="rounded-[2px] absolute bottom-0 right-2"
        alt="Flag"
      />
    </>
  );
};

export default Flag;
