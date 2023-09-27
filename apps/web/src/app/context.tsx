import { createContext } from "react";

import { Product } from "@/types/product";

export interface ProductsContextProps {
  fetchProducts?: (id: string) => Promise<void>;
  products: Array<Product>;
}

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
});
