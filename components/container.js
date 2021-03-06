import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, Children } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

export default function Container(props) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const { children, ...customMeta } = props;
    const router = useRouter();

    return (
        <div className={styles.container}>

            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            </Head>

            <nav className="w-full flex flex-row justify-start items-center ">

                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="bg-gray-200 dark:bg-black rounded p-3 h-10 w-10"
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                >
                    {mounted && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            className="h-4 w-4 text-gray-800 dark:text-gray-200"
                        >
                            {resolvedTheme === 'dark' ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            )}
                        </svg>
                    )}
                </button>

                <h1 className="font-xl font-extrabold">Auditorium.</h1>

                <NextLink href="/">
                    <a className="font-lg p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
                </NextLink>

                <NextLink href="/stage">
                    <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Stage</a>
                </NextLink>

            </nav>

            <main>
                {children}
            </main>

        </div>
    )
}