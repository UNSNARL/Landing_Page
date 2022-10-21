import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import How from '../components/How'
import Detail from '../components/Detail'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UNSNARL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
      </Head>

      <main className={styles.main}>
        <Header />
        <Intro />
        <Detail />
        <How />
        <Footer />
      </main>
    </div>
  )
}
