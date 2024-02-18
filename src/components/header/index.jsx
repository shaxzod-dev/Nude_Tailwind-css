import React from "react";

const Header = () => {
  return (
    <header className="pt-9 pb-4 bg-pink">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-[39px] phone:text-[30px] leading-10">Nude</h1>
          <nav className="md:flex hidden items-center justify-center gap-x-[60px]">
            <a href="#!" className="text-sm font-normal font-roboto">
              Lifetime ISA
            </a>
            <a href="#!" className="text-sm font-normal font-roboto">
              Blog
            </a>
            <a href="#!" className="text-sm font-normal font-roboto">
              Pact
            </a>
            <a href="#!" className="text-sm font-normal font-roboto">
              Purpose
            </a>
          </nav>
          <div className="flex md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
