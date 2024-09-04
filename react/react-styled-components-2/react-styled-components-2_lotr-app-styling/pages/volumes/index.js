import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import { StyledTitle, StyledIntro, StyledLink } from "@/styles";

export default function Volumes() {
  return (
    <>
      <StyledTitle>The Lord of the Rings</StyledTitle>
      <p>{introduction}</p>
      <div>
        <h2>All Volumes</h2>
        <StyledCoverList>
          {volumes.map((volume) => (
            <li key={volume.id}>
              <StyledLink href={`/volumes/${volume.slug}`}>
                <Image
                  src={volume.cover}
                  alt={`Cover image of ${volume.title}`}
                  width={126}
                  height={207}
                ></Image>
                <StyledBookTitle>{volume.title}</StyledBookTitle>
              </StyledLink>
            </li>
          ))}
        </StyledCoverList>
      </div>
    </>
  );
}

const StyledCoverList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
  font-size: 14px;
`;

const StyledBookTitle = styled.p`
  width: 125px;
`;
