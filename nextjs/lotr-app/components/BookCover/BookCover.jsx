import Image from "next/image";

export default function BookCover({ id, title }) {
  return (
    <Image
      src={`/../public/images/${id}.png`}
      height={230}
      width={140}
      alt={`Book cover of "${title}"`}
    />
  );
}
