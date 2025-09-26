import HamburgerBtn from "./HamburgerBtn.tsx";
import menuData from "./menuData.json";
import type { MenuDataType, HeaderHamburgerOpenState } from "../../types/types";

export default function NavMobile({
  isOpen,
  setIsOpen,
}: HeaderHamburgerOpenState) {
  return (
    <div className="relative md:hidden">
      <HamburgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="absolute right-0 z-50 rounded-mara border bg-black px-4 py-4">
          {menuData.map((e: MenuDataType) => {
            return (
              <nav key={e.label} id="mobile-menu" className="group">
                <a
                  className="flex items-center gap-1 px-3 py-3 text-white capitalize transition-colors duration-200 hover:bg-gray-100 hover:text-red-700"
                  href={`/${e.link}`}
                >
                  {e.label}
                </a>

                {e.children && (
                  <div className="bg-black transition-all duration-200 group-hover:visible">
                    <div className="py-2">
                      {e.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.link}
                          className="block py-2 pr-8 pl-8 text-white transition-colors duration-150 hover:bg-gray-100 hover:text-red-700"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </nav>
            );
          })}
        </div>
      )}
    </div>
  );
}
