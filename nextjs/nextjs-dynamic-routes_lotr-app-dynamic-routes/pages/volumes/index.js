import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function handleClick() {
    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    const randomVolume = getRandomElement(volumes);

    router.push(`/volumes/${randomVolume.slug}`);
  }
  const { slug } = router.query;

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleClick}>
        Random Volume
      </button>
    </>
  );
}
