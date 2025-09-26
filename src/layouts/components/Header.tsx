import { useState } from "react";
import maraLogo from "../../assets/images/MaraLogoBW.jpg";
import NavMobile from "./NavMobile.tsx";
import NavbarHeader from "./NavbarHeader.tsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="marginx my-2 flex flex-row items-center justify-between bg-black text-white">
      <div className="h-11 sm:h-14">
        <a href="/">
          <img
            className="h-full w-full object-contain"
            src={maraLogo.src}
            alt="Mara Logo"
          />
        </a>
      </div>
      <NavbarHeader />
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
