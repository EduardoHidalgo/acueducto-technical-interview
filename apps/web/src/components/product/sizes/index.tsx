"use client";
import { FC, useState } from "react";
import { ProductSizesServer } from "./server";

export interface ProductSizesProps {}

export const ProductSizes: FC<ProductSizesProps> = ({}) => {
  const sizes = [
    { name: "23", inStock: true },
    { name: "24", inStock: true },
    { name: "25", inStock: true },
    { name: "26", inStock: true },
    { name: "27", inStock: true },
    { name: "28", inStock: false },
  ];

  const [selectedSize, setSelectedSize] = useState(2);

  return (
    <ProductSizesServer
      selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}
      sizes={sizes}
    />
  );
};
