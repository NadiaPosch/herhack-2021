import { FC } from "react";

type Props = {
    href: string;
    type?: string;
};

export const LinkButton: FC<Props> = ({ href, children, type = "" }) => (
    <a
        className="inline-flex rounded-md shadow-md bg-indigo-800  hover:bg-indigo-700 active:bg-indigo-900 text-white px-6 py-3"
        href={href}
    >
        {children}
    </a>
);
