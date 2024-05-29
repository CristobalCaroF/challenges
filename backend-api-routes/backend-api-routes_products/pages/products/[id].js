import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>{data.name} </h1>
      <p>{data.description}</p>
      <p>
        {data.price} {data.currency}
      </p>
      <p>{data.category}</p>

      <Link href="/products">Back to all</Link>
    </>
  );
}
