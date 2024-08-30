import { cities } from "@/lib/data";
import Link from "next/link";

export default function Cities() {
  return (
    <>
      <h1>Cities</h1>
      <ul>
        {cities.map(({ id, slug, name }) => {
          return (
            <li key={id}>
              <Link href={`/cities/${slug}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
