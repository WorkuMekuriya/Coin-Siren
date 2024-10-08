'use client';

import { useState } from 'react';
import LogoLight from '../atoms/LogoLight';
import DesktopNav from '../organisms/DesktopNav';
import DrawerButton from '../molecules/DrawerButton';
import Drawer from '../organisms/Drawer';

const Header: React.FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false); // Specify the type of state

  return (
    <>
      <header className="container px-4 flex items-center justify-between py-4 -mb-[68px]">
        <LogoLight />
        <DesktopNav />
        <button className="lg:block hidden bg-white text-color-ff font-poppins text-[16px] py-[6px] px-6 rounded-lg">
          문의하기
        </button>
        <DrawerButton onClick={() => setIsOpenDrawer(true)} />
      </header>

      <Drawer isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} />
    </>
  );
};

export default Header;
