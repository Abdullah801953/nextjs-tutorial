import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return <h1>product details page {params.productId}</h1>;
};

export default page;
