import useSWR from "swr";
import { useRouter } from "next/router";
import {
  ProductCard,
  ProductReviews,
  ProductReviewContainer,
} from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <ProductReviewContainer>
        {data.reviews.length > 0 &&
          data.reviews.map((review) => (
            <ProductReviews key={review._id}>
              <h3>{review.title}</h3>
              <p>{review.text}</p>
              <p>{"⭐".repeat(review.rating)}</p>
            </ProductReviews>
          ))}
      </ProductReviewContainer>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
