import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function BookDetails({ id }) {
  const volume = volumes.find(({ slug }) => slug === id);
  console.log(id);
  return (
    <>
      <Link href="/volumes">
        <span>&#8592;</span> All Volumes
      </Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        <li>
          <p>{volume.books[0].ordinal}</p>
          <p>{volume.books[0].title}</p>
        </li>
        <li>
          <p>{volume.books[1].ordinal}</p>
          <p>{volume.books[1].title}</p>
        </li>
      </ul>
      <Image
        src={`/../public/images/${id}.png`}
        height={230}
        width={140}
        alt={`Book cover of "${volume.title}"`}
      />
    </>
  );
}
