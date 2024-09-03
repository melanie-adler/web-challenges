import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

export default function Volumes() {
  return (
    <>
      <StyledTitle>The Lord of the Rings</StyledTitle>
      <StyledIntro>{introduction}</StyledIntro>
      <div>
        <h2>All Volumes</h2>
        <StyledList>
          {volumes.map((volume) => (
            <li key={volume.id}>
              <Image
                src={volume.cover}
                alt={`Cover image of ${volume.title}`}
                width={140}
                height={230}
              ></Image>
              <StyledLink href={`/volumes/${volume.slug}`}>
                {volume.title}
              </StyledLink>
            </li>
          ))}
        </StyledList>
      </div>
    </>
  );
}

const StyledTitle = styled.h1`
  font-size: 68px;
  line-height: 1.1;
`;

const StyledIntro = styled.p`
  font-size: 20px;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style-type: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(212, 209, 205);
`;
