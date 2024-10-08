import React from 'react';
import CaretDownIcon from '@/app/icons/CaretDownIcon.svg';

interface DropdownMenuItem {
  label: string; // Label for the menu item
  href: string; // Link for the menu item
  fontClass?: string; // Optional class for styling the font
  isDivider?: boolean; // Optional boolean to indicate a divider
}

interface DropdownMenuProps {
  label: string; // Label for the dropdown
  items: DropdownMenuItem[]; // Array of menu items
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  return (
    <li className="relative inline-block group">
      <label className="flex items-center gap-2 peer cursor-pointer">
        <input type="checkbox" className="hidden" />
        {label}
        <CaretDownIcon />
      </label>

      <div className="absolute z-10 text-[14px] left-0 mt-2 w-[240px] bg-white text-color-4 rounded-lg shadow-lg peer-has-[:checked]:flex hidden flex-col py-2">
        {items &&
          items.map((item, index) =>
            item.isDivider ? (
              <hr className="py-0 my-2" key={index} />
            ) : (
              <a key={index} href={item.href} className={`block py-[10px] px-4 ${item.fontClass || ''}`}>
                {item.label}
              </a>
            ),
          )}
      </div>
    </li>
  );
};

export default DropdownMenu;
