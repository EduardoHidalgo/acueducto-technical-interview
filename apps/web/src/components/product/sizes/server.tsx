"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";

export interface ProductSizesServerProps {
  selectedSize: number;
  setSelectedSize: Dispatch<SetStateAction<number>>;
  sizes: Array<{
    name: string;
    inStock: boolean;
  }>;
}

export const ProductSizesServer: FC<ProductSizesServerProps> = ({
  selectedSize,
  setSelectedSize,
  sizes,
}) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">Size</h2>
        <a
          href="#"
          className="text-sm font-medium text-primary-500 hover:text-primary-600"
        >
          See sizing chart
        </a>
      </div>

      <RadioGroup
        value={selectedSize}
        onChange={setSelectedSize}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              className={({ active, checked }) =>
                classNames(
                  size.inStock
                    ? "cursor-pointer focus:outline-none"
                    : "cursor-not-allowed opacity-25",
                  active ? "ring-2 ring-primary-500 ring-offset-2" : "",
                  checked
                    ? "border-transparent bg-primary-500 text-white hover:bg-primary-400"
                    : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                )
              }
              disabled={size.inStock}
            >
              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};
