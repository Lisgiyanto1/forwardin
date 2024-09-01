import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Placeholder from '@/components/Placeholder'; // Reuse the placeholder component from your dashboard
import styles from "@/styles/Home.module.css";
import Dashboard from '@/pages/dashboard/home'; // Import the Dashboard component
import GetStarted from "@/components/widget/GetStarted";

export default function Home() {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulating loading time or delay
  //   if (status === 'loading') {
  //     const timeout = navigator.onLine ? 3000 : 6000;
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, timeout);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [status]);

  // // Render a placeholder if the session is still being loaded
  // if (loading) {
  //   return <Placeholder />;
  // }

  // // If the user is logged in, display the dashboard content
  // if (session) {
  //   return <Dashboard />;
  // }

  // If the user is not logged in, display the public home page content
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
        <meta property="og:title" content="Forwardin" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:url" content="https://forwardin.vercel.app" />
        <link rel="icon" href="/logo_forwardin.ico" />
      </Head>

      <main className="h-screen w-screen">
        <GetStarted/>
      </main>
    </>
  );
}