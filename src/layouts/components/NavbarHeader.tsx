import menuData from "./menuData.json";
import type { MenuDataType } from "../../types/types";

export default function NavbarHeader() {
  return (
    <nav className="hidden gap-4 md:flex">
      {menuData.map((e: MenuDataType) => {
        return (
          <div key={e.label} className="group relative">
            <a
              className="flex items-center gap-1 px-3 py-2 text-white capitalize transition-colors duration-200 hover:text-red-700"
              href={`/${e.link}`}
            >
              {e.label}
              {e.children && (
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>

            {e.children && (
              <div className="invisible absolute top-full left-0 z-50 min-w-48 rounded-mara border bg-black opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="py-2">
                  {e.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.link}
                      className="block px-4 py-2 text-sm text-white transition-colors duration-150 hover:bg-gray-100 hover:text-red-700"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
