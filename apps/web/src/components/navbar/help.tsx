import { FC } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export interface NavbarHelpProps {}

export const NavbarHelp: FC<NavbarHelpProps> = ({}) => {
  return (
    <>
      <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
        <span className="sr-only">Help</span>
        <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href="#"
        className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
      >
        Help
      </a>
    </>
  );
};
