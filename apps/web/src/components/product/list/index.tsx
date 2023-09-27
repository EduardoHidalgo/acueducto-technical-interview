"use client";
import { FC, useContext } from "react";

import { ProductListLayout } from "./layout";
import { ProductsContext } from "@/app/context";

export interface ProductListProps {}

export const ProductList: FC<ProductListProps> = () => {
  const { products } = useContext(ProductsContext);

  return <ProductListLayout products={products} />;
};
