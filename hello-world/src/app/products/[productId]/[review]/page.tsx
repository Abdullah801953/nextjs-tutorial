import React from "react";

const page = ({
  params,
}: {
  params: { review: string; productId: string };
}) => {
  return <h1>review {params.review}</h1>;
};

export default page;
