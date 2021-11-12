import { FC } from "react";

type Props = {
    onClick: () => void;
};

export const Button: FC<Props> = ({ onClick, children }) => (
    <button
        className="inline-block rounded-md shadow-md bg-indigo-800  hover:bg-indigo-700 active:bg-indigo-900 text-white px-6 py-3"
        onClick={onClick}
    >
        {children}
    </button>
);
