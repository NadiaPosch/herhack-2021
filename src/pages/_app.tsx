import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import "../styles/index.css";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Users", href: "/users" },
    { name: "API", href: "/api/users" },
];

function MyApp({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();

    return (
        <div>
            <Head>
                <title>Mrs. Robot - Diversity Challenge</title>
                <meta name="description" content="HerHack 2021 - Diversity Challenge" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />
            </Head>
            <nav className="flex justify-end gap-x-4 p-4 bg-gradient-to-br from-indigo-600 to to-indigo-800">
                {navigation.map(({ name, href }) => (
                    <Link key={name} href={href} passHref>
                        <a
                            className={`text-lg font-medium transition-colors ${
                                pathname === href ? "text-white" : "text-gray-400 hover:text-white"
                            }`}
                        >
                            {name}
                        </a>
                    </Link>
                ))}
            </nav>
            <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
