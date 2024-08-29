import Link from "next/link";

export default function Navigation({ id }) {
  if (id === "the-fellowship-of-the-ring") {
    return (
      <Link href="/volumes/the-two-towers">
        next page <span>&#8594;</span>
      </Link>
    );
  }
  if (id === "the-two-towers")
    return (
      <>
        <Link href="/volumes/the-fellowship-of-the-ring">
          <span>&#8592;</span> previous page
        </Link>{" "}
        {""}
        <Link href="/volumes/the-return-of-the-king">
          next page <span>&#8594;</span>
        </Link>
      </>
    );
  if (id === "the-return-of-the-king")
    return (
      <>
        <Link href="/volumes/the-two-towers">
          <span>&#8592;</span> previous page
        </Link>
      </>
    );
}
