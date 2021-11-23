import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LeftNavbar from './components/LeftNavbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DashBoard </title>
        <meta name="description" content="Made by electron-space" />
        <link rel="icon" href="/dash.ico" />
      </Head>
      <h1>Placeholder</h1>

      <LeftNavbar />
    </div>
  );
}
