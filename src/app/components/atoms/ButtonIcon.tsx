import React from 'react';

interface IconButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Type for onClick event
  Icon: React.ComponentType; // Type for the Icon component
  className?: string; // className is optional
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, Icon, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon />
    </button>
  );
};

export default IconButton;
