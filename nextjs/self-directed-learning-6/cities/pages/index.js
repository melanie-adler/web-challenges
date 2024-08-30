import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/cities">To the Cities</Link>
    </div>
  );
}
