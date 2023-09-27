"use client";
import { FC, ReactNode, useState } from "react";
import { notFound } from "next/navigation";

import { ProductsContext } from "./context";
import { Product } from "@/types/product";
import { getSearchProducts } from "@/services/getSearchProducts";
import { getProducts } from "@/services/getProducts";

export interface HomeContainerProps {
  children: ReactNode;
  initialData: Array<Product>;
}

/** The main use case for this container is to perform client operations and
 * decouple from the rest of rendering code.
 */
export const HomeContainer: FC<HomeContainerProps> = ({
  children,
  initialData,
}) => {
  const SEARCHABLE_LENGTH = 3;
  const [products, setProducts] = useState<Array<Product>>(initialData);

  const fetchProducts = async (search: string) => {
    // Don't perform any search if the minimum length was not satisfied.
    if (search.length >= SEARCHABLE_LENGTH) {
      const products = await getSearchProducts(search);
      if (products instanceof Error) return notFound();

      return setProducts(products);
    }

    // If some search event was triggered but the search text hasn't a valid
    // length, should fetch all the products again.
    const products = await getProducts();
    if (products instanceof Error) return notFound();

    return setProducts(products);
  };

  return (
    <ProductsContext.Provider value={{ fetchProducts, products }}>
      {children}
    </ProductsContext.Provider>
  );
};
