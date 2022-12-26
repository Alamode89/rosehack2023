/* eslint-disable new-cap */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import AdminNavigation from "../components/Admin/Navigation";
import Navigation from "../components/Navigation";
// eslint-disable-next-line camelcase
import { Lexend, Press_Start_2P } from "@next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const pixel = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400",
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.asPath.startsWith("/admin")) {
    return (
      <main className={`${lexend.variable} ${pixel.variable}`}>
        <AdminNavigation />
        <Component {...pageProps} />
      </main>
    );
  } else if (router.asPath == "/dashboard" || router.asPath == "/user") {
    return (
      <main className={`${lexend.variable} ${pixel.variable}`}>
        <Navigation />
        <Component {...pageProps} />
      </main>
    );
  } else {
    return (
      <main className={`${lexend.variable} ${pixel.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    );
  }
}

export default MyApp;
