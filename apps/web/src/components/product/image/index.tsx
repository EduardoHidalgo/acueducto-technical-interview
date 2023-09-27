import { FC } from "react";
import classNames from "classnames";

export interface ProductImageProps {
  discount?: number;
  image: string;
  name: string;
}

export const ProductImage: FC<ProductImageProps> = ({
  discount,
  image,
  name,
}) => {
  return (
    <div className="relative col-span-2 h-full mt-8 lg:mt-0">
      <img
        alt={name}
        className={classNames("rounded-lg h-full w-full object-contain")}
        src={image}
      />
      {discount && (
        <img
          alt={name}
          className="absolute top-4 right-4"
          height={32}
          src={"/discount.png"}
          width={32}
        />
      )}
    </div>
  );
};
