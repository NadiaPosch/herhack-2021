import Head from "next/head";
import Image from "next/image";
import { FC, ReactNode } from "react";

// const NAVIGATION = [{ name: "Home", href: "/" }];

type Props = {
    title: string;
    heading?: ReactNode;
};

export const Layout: FC<Props> = ({ title, children, heading }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="HerHack 2021 - Diversity Challenge" />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            />
        </Head>
        <header className="flex justify-center bg-gradient-to-br from-indigo-600 to to-indigo-800">
            <div className="w-full max-w-full md:max-w-xl p-3 flex justify-between items-center text-white text-xl">
                <a className="hover:opacity-90 transition-opacity" href="/">
                    <Image src="/logo.png" height={60} width={60} alt="Logo" />
                </a>
                {heading}
            </div>
        </header>
        <div className="max-w-full md:max-w-xl mx-auto px-4 py-12">{children}</div>
    </>
);
