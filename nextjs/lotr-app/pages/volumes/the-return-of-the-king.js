import BookDetails from "@/components/BookDetails/BookDetails";
import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";

export default function theReturnOfTheKing() {
  return (
    <>
      <BookDetails id={"the-return-of-the-king"} />{" "}
      <Navigation id={"the-return-of-the-king"} />
    </>
  );
}
