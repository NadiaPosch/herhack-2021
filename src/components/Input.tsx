import { FC, HTMLInputTypeAttribute } from "react";

type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    size?: number;
};

export const Input: FC<Props> = ({ value, onChange, size, type = "text", placeholder = "" }) => (
    <input
        maxLength={size}
        size={size}
        type={type}
        className="border border-gray-400 rounded-md py-3 px-4 w-full focus:border-indigo-500 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
    />
);
