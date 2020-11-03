import Head from "next/head";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";
import { ImageCards } from "../components/ImageCards";
import { useRouter } from "next/router";
import { useState } from "react";
import { Recipes } from "../services/recipies";

export async function getStaticProps() {
  const recipeServices = new Recipes();
  // fetch the content of the page from an headless CMS
  const popularRecipes = recipeServices.getPopularRecipes();
  return {
    props: { popularRecipes },
  };
}

export default function Home({ popularRecipes }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Tomato | Restaurants and Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles["hero-section"]}>
        <h1>Tomato</h1>
        <h3>A cheap clone of Zomato</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/city/${search}`);
          }}
        >
          <input
            type="text"
            placeholder="see city highlights"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </section>

      <section>
        <h3 className="text-center">Explore</h3>
        <ul className={styles["explore-cards__container"]}>
          {popularRecipes.map((e) => {
            return (
              <li>
                <ImageCards title={e.title}></ImageCards>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
