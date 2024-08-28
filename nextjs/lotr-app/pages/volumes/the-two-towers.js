import BookDetails from "@/components/BookDetails/BookDetails";
import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";

export default function theTwoTowers() {
  return (
    <>
      <BookDetails id={"the-two-towers"} />
      <Navigation id={"the-two-towers"} />
    </>
  );
}
