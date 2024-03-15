import React from "react";

interface IconButtonProps {
  iconPath: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ iconPath, onClick, alt }: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconButton;
