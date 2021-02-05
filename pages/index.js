import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Empire Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Empire Store</h1>

        <p className={styles.description}>
          Welcome to the best store in the Galactic Empire!
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="https://nextjs.org/docs">
              <img src="/images/dvhelmet.jpg" alt="Darth Vader Helmet" />
              <h3>Darth Vader Helmet</h3>
              <p>
                Fans can portray the greatest battles and missions from the Star
                Wars saga with the helmets from The Black Series!{" "}
              </p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="https://nextjs.org/learn">
              <img src="/images/atat.jpg" alt="LEGO AT-AT" />
              <h3>LEGO Star Wars AT-AT</h3>
              <p>
                The buildable, posable AT-AT Walker comes with Luke Skywalker,
                General Veers and other LEGO minifigures.
              </p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="https://github.com/vercel/next.js/tree/master/examples">
              <img src="/images/metaldeathstar.jpg" alt="Metal Death Star" />
              <h3> Death Star 7.5 Cm &rarr;</h3>
              <p>
                Take on the challenge of building your own detailed Death Star
                with this laser-cut Metal Earth 3D model kit!{" "}
              </p>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
