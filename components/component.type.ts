import { HTMLInputTypeAttribute } from "react";

export interface InputPropsType {
  label: string;
  type: HTMLInputTypeAttribute;
  width?: number;
  auth?: boolean;
}

export interface ButtonPropsType {
  label: string;
  type?: HTMLButtonElement["type"];
  onClick?: (...args: unknown[]) => void;
}
