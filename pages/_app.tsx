import RootLayout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Placeholder from "@/components/Placeholder";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  return (

    <SessionProvider session={session}>
      {loading ? <Placeholder /> :
        <RootLayout>

          <Component {...pageProps} />
        </RootLayout>}
    </SessionProvider>
  );
}
