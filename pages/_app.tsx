import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Navigation from "../components/Admin/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.asPath.startsWith("/admin")) {
    return (
      <>
        <Navigation />
        <Component {...pageProps} />
      </>
    );
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
