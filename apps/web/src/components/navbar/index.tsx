import { FC } from "react";
import { NavbarLogo } from "./logo";
import { NavbarSearchInput } from "./search";
import { NavbarHelp } from "./help";
import { NavbarCart } from "./cart";

export interface NavbarProps {
  withSearch?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ withSearch }) => {
  return (
    <header className="relative">
      <nav aria-label="Top" className="mx-auto w-full">
        <div className="border-b border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:max-w-2xl w-full mx-auto items-center justify-between gap-4">
            <NavbarLogo />
            {withSearch && (
              <div className="w-full lg:max-w-xs">
                <NavbarSearchInput />
              </div>
            )}
            <div className="flex flex-1 items-center justify-end">
              <div className="flex items-center lg:ml-8">
                <NavbarHelp />
                <NavbarCart />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
