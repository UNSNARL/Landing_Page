import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landing/Home.module.css'
import Header from '../components/Landing/Header'
import Footer from '../components/Landing/Footer'
import Intro from '../components/Landing/Intro'
import How from '../components/Landing/How'
import Detail from '../components/Landing/Detail'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UNSNARL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" defer />
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
