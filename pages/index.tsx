import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Next.js App</title>
        <meta
          name="description"
          content="Welcome to my Next.js app, where you can find high-quality web development resources."
        />
        <meta
          name="keywords"
          content="Next.js, Web Development, React, SEO, JavaScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Welcome to My Next.js App" />
        <meta
          property="og:description"
          content="Explore a world of web development resources and tutorials on Next.js."
        />
        <meta property="og:image" content="/next-og-image.png" />
        <meta property="og:url" content="https://your-domain.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Welcome to my Next.js App! Explore and learn more about web
            development.
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
}
