import Head from "next/head";

import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next APP</title>
        <meta name="description" content="Aplicacion de Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
