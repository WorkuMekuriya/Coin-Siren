import React from 'react';
import CloseIcon from '@/app/icons/CloseIcon.svg';

// Define the props for the Drawer component
interface DrawerProps {
  isOpen: boolean; // Indicates if the drawer is open
  onClose: () => void; // Function to call when the drawer should be closed
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => (
  <aside
    className={`fixed z-10 font-poppins top-0 right-0 w-72 h-full bg-white transition-transform transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
    <button onClick={onClose} className="absolute top-4 right-4 text-xl">
      <CloseIcon />
    </button>
    <div className="p-6 mt-6">
      <div className="text-[16px] font-inter flex flex-col gap-4">
        <div className="font-poppins">채용</div>
        <div className="font-normal ml-4">해외 개발자 원격 채용</div>
        <div className="ml-4">외국인 원격 채용 (비개발 직군)</div>
        <div className="ml-4">채용</div>
        <hr />
        <div className="font-poppins">해외 개발자 활용 서비스</div>
      </div>

      <button className="bg-gradient w-full text-white font-poppins text-[16px] py-[6px] px-6 rounded-lg mt-6">
        문의하기
      </button>
    </div>
  </aside>
);

export default Drawer;
