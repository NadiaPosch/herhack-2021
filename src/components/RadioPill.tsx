import { FC } from "react";

type Props = {
    onClick: () => void;
    active?: boolean;
};

export const RadioPill: FC<Props> = ({ children, onClick, active = false }) => (
    <button
        className={`transition-colors rounded-full py-1 px-4 ${
            active ? "bg-indigo-400 text-white" : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={onClick}
    >
        {children}
    </button>
);
