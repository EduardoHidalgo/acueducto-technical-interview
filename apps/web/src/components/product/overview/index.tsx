import { FC } from "react";

import { Product } from "@/types/product";
import { ProductImage } from "../image";
import { ProductRecommendations } from "../recommendations";
import { ProductReviewSummary } from "@/components/reviewSummary";
import classNames from "classnames";

import { ProductBuyButton } from "../buyButton";
import { ProductReviews } from "../reviews";
import { ProductSizes } from "../sizes";

export interface ProductProps {
  discount?: number;
  product: Product;
}

export const ProductOverview: FC<ProductProps> = ({ discount, product }) => {
  return (
    <div className="bg-white">
      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-4 lg:grid-rows-1 gap-8">
          <ProductImage
            discount={discount}
            image={product.image}
            name={product.name}
          />
          <div className="mt-4 lg:mt-0 col-span-2">
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h1>
                <div className="flex flex-row justify-end gap-2">
                  <p
                    className={classNames(
                      "text-sm font-medium text-gray-900",
                      discount && "line-through"
                    )}
                  >
                    {`$${product.price}${discount ? "" : " USD"}`}
                  </p>
                  {discount && (
                    <p className="text-sm font-semibold text-red-600">
                      {`$${(Number(product.price) / 100) * discount} USD`}
                    </p>
                  )}
                </div>
              </div>
              <ProductReviewSummary />
              <div className="">
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Description
                  </h2>
                  <div
                    className="prose prose-sm mt-4 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
                <form>
                  <ProductSizes />
                  <ProductBuyButton />
                </form>
              </div>
            </div>
          </div>
        </div>
        <ProductReviews />
        <ProductRecommendations />
      </main>
    </div>
  );
};
