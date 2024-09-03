import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";
import ChevronLeft from "../../icons/chevron-left.svg";
import { StyledTitle, StyledIntro, StyledLink } from "@/styles";
import styled from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <StyledLink href="/volumes">
        <ChevronLeft /> All Volumes
      </StyledLink>
      <StyledTitle>{title}</StyledTitle>
      <StyledIntro>{description}</StyledIntro>
      <StyledContainer backgroundColor={color}>
        <StyledBookList>
          {books.map(({ ordinal, title }) => (
            <StyledBookListItem key={title}>
              {ordinal}
              <br></br> <strong>{title}</strong>
            </StyledBookListItem>
          ))}
        </StyledBookList>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledContainer>
      {previousVolume ? (
        <StyledNextPageLeft>
          <StyledLink href={`/volumes/${previousVolume.slug}`}>
            <ArrowLeft /> Previous Volume<br></br> {previousVolume.title}
          </StyledLink>
        </StyledNextPageLeft>
      ) : null}
      {nextVolume ? (
        <StyledNextPageRight>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume<br></br> {nextVolume.title} <ArrowRight />
          </StyledLink>
        </StyledNextPageRight>
      ) : null}
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${({ backgroundColor }) =>
    `linear-gradient(to right, ${backgroundColor}, var(--color-smoke))`};
  padding: 1rem;
`;

const StyledBookList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 0;
`;

const StyledBookListItem = styled.li`
  list-style-type: none;
`;

const StyledNextPageRight = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
  margin: auto;
  padding: 1rem;
`;

const StyledNextPageLeft = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
  margin: auto;
  padding: 1rem;
`;
