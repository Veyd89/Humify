"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { InputPropsType } from "../component.type";

const generateIdFromLabel = (idFor: string) => {
  return idFor
    .split(" ")
    .map((word, i) =>
      i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

const Input = ({ type, label, width, auth = true }: InputPropsType) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`flex flex-col relative mb-5 ${auth ? "mb-5" : ""}`}>
      <input
        type={showPassword ? "text" : type}
        id={generateIdFromLabel(label)}
        placeholder=""
        className={`${
          auth ? "border-b border-black rounded-none pb-1 pr-2 " : ""
        } ${
          auth && type === "password" ? "pr-6" : ""
        } w-full outline-none  text-base peer`}
        style={{ width: `${width}px !important` }}
      />
      <label
        className={`absolute top-0 select-none cursor-text opacity-90 transition-all ${
          auth
            ? "peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:opacity-65 peer-focus:-top-5 peer-focus:text-xs peer-focus:opacity-65"
            : ""
        }`}
        htmlFor={generateIdFromLabel(label)}
      >
        {label}
      </label>
      {type === "password" && (
        <i
          className="absolute cursor-pointer right-0"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className={``} width={20} />
          ) : (
            <Eye className={``} width={20} />
          )}
        </i>
      )}
    </div>
  );
};

export default Input;
