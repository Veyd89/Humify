import { EqualApproximately, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import { CardPropsType } from "../component.type";

const Card = ({
  headIcon: Icon,
  label,
  mainValue,
  statusIcon,
  statusValue,
  statusDesc,
  bgColorClass = "bg-blue-100",
}: CardPropsType) => {
  const renderStatusIcon = () => {
    switch (statusIcon) {
      case "No change":
        return <EqualApproximately strokeWidth={1} className="size-6" />;
      case "Down":
        return <TrendingDown strokeWidth={1} className="size-6 text-red-600" />;
      case "Up":
        return <TrendingUp strokeWidth={1} className="size-6 text-green-600" />;
    }
  };
  return (
    <div
      className={`px-4 py-2.5 w-2xs  shadow-md rounded-lg ${bgColorClass} border border-black`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <span className="text-sm">{label}</span>
          <Icon strokeWidth={1} className="size-8 " />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-medium">{mainValue}</span>
            <div className="flex gap-1 items-center">
              <i>{renderStatusIcon()}</i>
              <p
                className={`text-xs ${
                  statusValue !== undefined &&
                  statusValue > 0 &&
                  "text-green-600"
                } ${
                  statusValue !== undefined && statusValue < 0 && "text-red-600"
                }`}
              >
                {statusValue ? `${statusValue}%` : "No different"}{" "}
                <span className="text-slate-500">{statusDesc}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
