import { FC } from "react";
import { Product } from "@/types/product";
import { ProductListItem } from "../listItem";

export interface ProductListLayoutProps {
  products: Array<Product>;
}

export const ProductListLayout: FC<ProductListLayoutProps> = ({ products }) => {
  return products.map((product) => (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 h-60 transition-all delay-100">
        <img
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          src={product.image}
        />
        {product.discount > 0 && (
          <img
            alt={product.name}
            className="absolute top-4 right-4"
            width={32}
            height={32}
            src={"/discount.png"}
          />
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <ProductListItem product={product} />
      </div>
    </div>
  ));
};
