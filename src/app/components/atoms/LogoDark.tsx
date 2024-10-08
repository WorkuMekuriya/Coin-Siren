import Image from 'next/image';
import React from 'react';

const LogoDark: React.FC = () => (
  <Image src="/images/logo/dark.png" alt="Hyperhire logo" width={187} height={34} priority className="mb-[16px]" />
);

export default LogoDark;
