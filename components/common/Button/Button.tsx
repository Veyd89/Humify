"use client";

import { ButtonPropsType } from "../component.type";

const Button = ({ label, type, onClick }: ButtonPropsType) => {
  return (
    <button
      type={type}
      className="w-full bg-[#7B1113] text-white rounded-lg cursor-pointer py-3 text-lg"
      onClick={(e) => onClick?.(e)}
    >
      {label}
    </button>
  );
};

export default Button;
