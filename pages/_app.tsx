import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import AdminNavigation from "../components/Admin/Navigation";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.asPath.startsWith("/admin")) {
    return (
      <>
        <AdminNavigation />
        <Component {...pageProps} />
      </>
    );
  } else if (router.asPath == "/dashboard" || router.asPath == "/user") {
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
