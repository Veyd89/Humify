import { LucideIcon } from "lucide-react";
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
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    ...args: unknown[]
  ) => void;
}

export interface CardPropsType {
  label: string;
  headIcon: LucideIcon;
  bgColorClass?: string;
  mainValue: number;
  // <TODO: will be change and refactor soon >
  statusIcon: "Up" | "Down" | "No change";
  statusValue?: number;
  statusDesc?: string;
  // </TODO: will be change and refactor soon >
}

export type ChartsSeriesAllEmployeeType =
  | "Engineering"
  | "Finance"
  | "Marketing"
  | "HRD/GA"
  | "House Keeping"
  | "RND";
