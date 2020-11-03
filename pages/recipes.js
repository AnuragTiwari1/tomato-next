import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tomato | Find recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      Recipes
    </div>
  );
}
