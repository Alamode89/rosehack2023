/* eslint-disable new-cap */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
// eslint-disable-next-line camelcase
import { Lexend, Press_Start_2P } from "@next/font/google";
import { SSRProvider } from "react-bootstrap";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const pixel = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <main className={`${lexend.variable} ${pixel.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SSRProvider>
  );
}

export default MyApp;
