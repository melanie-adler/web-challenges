import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return "error";
  }

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>
        Twitter: {data.twitterName} Geohash: {data.geohash}
      </p>
      <p>
        <b>{data.favoriteAnimal}!!!</b>
      </p>
    </>
  );
}
