import Head from "next/head";
import { Header } from "../../components/Header";
import { useRouter } from "next/router";
import { Locations } from "../../services/locations";

export const getServerSideProps = async (context) => {
  const locationServices = new Locations();
  const location_details = await locationServices.fetchCityFromQuery(
    context.params.cityName
  );

  return {
    props: {
      location_details,
    },
  };
};

export default function City({ location_details }) {
  const router = useRouter();
  const { cityName } = router.query;
  return (
    <div>
      <Head>
        <title>Tomato | {cityName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <code> {JSON.stringify(location_details, null, 10)}</code>
    </div>
  );
}
