// <!-- Thanks Joes Rosario --><!-- https://codepen.io/JoseRosario/pen/BWqMwK -->

import type { HeaderHamburgerOpenState } from "../../types/types";

const HamburgerBtn = ({ isOpen, setIsOpen }: HeaderHamburgerOpenState) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`wrapper-menu flex h-[30px] w-[30px] cursor-pointer flex-col justify-between transition-transform duration-330 ease-out ${
        isOpen ? "open rotate-[-45deg]" : ""
      }`}
      onClick={handleClick}
      role="button"
      aria-expanded={isOpen}
    >
      <div
        className={`line-menu half start h-1 w-1/2 origin-right rounded-[5px] bg-white transition-transform duration-330 ease-hamburgerBtn ${
          isOpen ? "translate-y-[-2px] rotate-[-90deg]" : ""
        }`}
      />
      <div className="line-menu h-1 w-full rounded-[5px] bg-white" />
      <div
        className={`line-menu half end h-1 w-1/2 origin-left self-end rounded-[5px] bg-white transition-transform duration-330 ease-hamburgerBtn ${
          isOpen ? "translate-y-[2px] rotate-[-90deg]" : ""
        }`}
      />
    </div>
  );
};

export default HamburgerBtn;
