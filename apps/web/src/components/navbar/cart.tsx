import { FC } from "react";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

export interface NavbarCartProps {}

export const NavbarCart: FC<NavbarCartProps> = ({}) => {
  return (
    <div className="ml-4 flow-root lg:ml-8">
      <a href="#" className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 group-hover:text-primary-400 text-primary-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
};
