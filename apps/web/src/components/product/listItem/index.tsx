import { FC } from "react";
import classNames from "classnames";

import { Product } from "@/types/product";

export interface ProductListItemProps {
  product: Product;
}

export const ProductListItem: FC<ProductListItemProps> = ({ product }) => {
  const hasDiscount = product.discount > 0;

  const href = hasDiscount
    ? `/${product.id}?discount=${product.discount}`
    : `/${product.id}`;

  return (
    <>
      <div>
        <h3 className="text-sm text-gray-700">
          <a href={href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
      </div>
      <div className="flex flex-row justify-end gap-2">
        <p
          className={classNames(
            "text-sm font-medium text-gray-900",
            hasDiscount && "line-through"
          )}
        >
          {`$${product.price}${hasDiscount ? "" : " USD"}`}
        </p>
        {hasDiscount && (
          <p className="text-sm font-semibold text-red-600">
            {`$${product.discountedPrice} USD`}
          </p>
        )}
      </div>
    </>
  );
};
