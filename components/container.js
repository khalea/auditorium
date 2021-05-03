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

    return(
        <div className={styles.container}>

            <Head>

            </Head>

            <nav className="w-full flex flex-row justify-start items-center ">

                <h1>Auditorium.</h1>

                <NextLink href="/">
                    <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
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