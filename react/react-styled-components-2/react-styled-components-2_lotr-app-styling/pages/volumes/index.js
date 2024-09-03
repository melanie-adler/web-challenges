import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import { StyledTitle, StyledIntro, StyledLink } from "@/styles";

export default function Volumes() {
  return (
    <>
      <StyledTitle>The Lord of the Rings</StyledTitle>
      <StyledIntro>{introduction}</StyledIntro>
      <div>
        <h2>All Volumes</h2>
        <StyledCoverList>
          {volumes.map((volume) => (
            <li key={volume.id}>
              <StyledLink href={`/volumes/${volume.slug}`}>
                <Image
                  src={volume.cover}
                  alt={`Cover image of ${volume.title}`}
                  width={140}
                  height={230}
                ></Image>
                {volume.title}
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
`;
