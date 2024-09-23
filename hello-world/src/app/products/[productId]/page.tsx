import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  if (parseInt(params.productId) > 100) {
    notFound();
  }
  return <h1>product details page {params.productId}</h1>;
};

export default page;
