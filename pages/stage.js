import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import StageLayout from '../layouts/stage.js'

export default function Stage() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Stages | Auditorium.</title>
                <meta name="description" content="Listen to music synchronously with your friends with our interactive queueing & voting system." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StageLayout 
                title="hasanabi offliners"
                owner="khally.b"
            />

            

        </div>
    )
}

