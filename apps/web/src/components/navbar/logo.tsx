import { FC } from "react";

export interface NavbarLogoProps {}

export const NavbarLogo: FC<NavbarLogoProps> = ({}) => {
  const logo = "https://tailwindui.com/img/logos/mark.svg?color=lime&shade=500";

  return (
    <>
      {/* Logo on lg+ breakpoint */}
      <div className="hidden lg:flex lg:flex-1 lg:items-center">
        <a href="#">
          <span className="sr-only">Your Company</span>
          <img alt="logo" className="h-8 w-auto" src={logo} />
        </a>
      </div>
      {/* Logo on lg- breakpoint */}
      <a href="#" className="lg:hidden">
        <span className="sr-only">Your Company</span>
        <img alt="logo" className="h-8 w-auto" src={logo} />
      </a>
    </>
  );
};
