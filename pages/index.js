import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '../components/container'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auditorium.</title>
        <meta name="description" content="Listen to music synchronously with your friends with our interactive queueing & voting system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Container>

    </Container>
      
    </div>
  )
}
