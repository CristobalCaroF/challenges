import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}, {data.age}
      </h1>
      <h2>Twitter: {data.twitter}</h2>
      <h2>Geohash: {data.geohash}</h2>
    </>
  );
}
