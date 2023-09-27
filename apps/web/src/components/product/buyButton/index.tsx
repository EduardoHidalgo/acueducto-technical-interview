import { FC } from "react";

export interface ProductBuyButtonProps {}

export const ProductBuyButton: FC<ProductBuyButtonProps> = ({}) => {
  return (
    <button
      type="submit"
      className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-500 px-8 py-3 text-base font-medium text-white"
    >
      Add to cart
    </button>
  );
};
