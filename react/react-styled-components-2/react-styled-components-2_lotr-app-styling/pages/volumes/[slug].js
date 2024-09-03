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
        <StyledNavContainer>
          <ChevronLeft /> <p>All Volumes</p>
        </StyledNavContainer>
      </StyledLink>
      <StyledTitle>{title}</StyledTitle>
      <p>{description}</p>
      <StyledContainer backgroundColor={color}>
        <StyledBookList>
          {books.map(({ ordinal, title }) => (
            <StyledBookListItem key={title}>
              <em>{ordinal}</em>
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
            <StyledPageNavContainer>
              <ArrowLeft />{" "}
              <p>
                <em>Previous Volume</em>
                <br></br>
                {previousVolume.title}
              </p>
            </StyledPageNavContainer>
          </StyledLink>
        </StyledNextPageLeft>
      ) : null}
      {nextVolume ? (
        <StyledNextPageRight>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            <StyledPageNavContainer>
              <p>
                <em>Next Volume</em>
                <br></br> {nextVolume.title}
              </p>
              <ArrowRight />
            </StyledPageNavContainer>
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

const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPageNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledBookList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  width: 120px;
  font-size: 16px;
`;

const StyledBookListItem = styled.li`
  list-style-type: none;
`;

const StyledNextPageRight = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 1rem;
  text-align: right;
  margin: auto;
  padding: 1rem;
  font-size: 14px;
`;

const StyledNextPageLeft = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 1rem;
  text-align: left;
  margin: auto;
  padding: 1rem;
  font-size: 14px;
`;
