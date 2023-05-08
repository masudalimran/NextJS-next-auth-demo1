import React, { ChangeEvent } from "react";

type Props = {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  large?: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

const Input = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
  large,
}: Props) => {
  return (
    <>
      {large ? (
        <textarea
          rows={4}
          value={value}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition 
                      disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
        />
      ) : (
        <input
          type={type}
          disabled={disabled}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition 
  disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
        />
      )}
    </>
  );
};

export default Input;
