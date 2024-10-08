import React from 'react';
import HamburgerIcon from '@/app/icons/HamburgerIcon.svg';
import IconButton from '../atoms/ButtonIcon';

interface DrawerButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Type for the onClick event
}

const DrawerButton: React.FC<DrawerButtonProps> = ({ onClick }) => (
  <IconButton onClick={onClick} Icon={HamburgerIcon} className="lg:hidden text-white text-[24px]" />
);

export default DrawerButton;
