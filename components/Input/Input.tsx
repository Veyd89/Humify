import { InputProps } from "./input.type";

const generateIdFromLabel = (idFor: string) => {
  return idFor
    .split(" ")
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase + word.slice(1)))
    .join("");
};

const Input = ({ type, label, width }: InputProps) => {
  return (
    <div className="w-full">
      <label htmlFor={generateIdFromLabel(label)}>{label}</label>
      <input
        type={type}
        id={generateIdFromLabel(label)}
        className="border border-black w-full outline-none py-1.5 px-2.5 text-base rounded-lg"
        style={{ width: `${width}px !important` }}
      />
    </div>
  );
};

export default Input;
