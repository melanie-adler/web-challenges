import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function CityDetail() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }

  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <>
      <Link href="/cities">&#8592; All Cities</Link>

      <h1>
        {city.name} <small> {city.country}</small>
      </h1>
      <p>Population: {city.population}</p>
      <p>{city.description}</p>
    </>
  );
}
