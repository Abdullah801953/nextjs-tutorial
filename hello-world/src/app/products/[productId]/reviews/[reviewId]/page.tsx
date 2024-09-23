import { notFound } from "next/navigation";
import React from "react";
const page = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  if (parseInt(params.reviewId, 10) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </>
  );
};

export default page;
