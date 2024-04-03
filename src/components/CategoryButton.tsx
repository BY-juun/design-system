import React from "react";
import { flexColCenter } from "../mixins/styles";

interface Props {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CategoryButton = ({ iconAlt, iconPath, text, onClick }: Props) => {
  return (
    <button
      className={`
      rounded-button-default
      border
      boder-primary
      text-primary
      text-base
      font-bold
      pl-[22px]
      pr-[21px]
      py-4
      ${flexColCenter}
    `}
      onClick={onClick}
    >
      <img alt={iconAlt} src={iconPath} />
      <p>{text}</p>
    </button>
  );
};

export default CategoryButton;
