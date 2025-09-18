import menuData from "./menuData.json";
interface MenuDataType {
  label: string;
  link: string;
  children?: { label: string; link: string };
}

export default function NavbarHeader() {
  console.log(menuData);

  return (
    <nav>
      {menuData.map((e) => {
        return (
          <div key={e.label}>
            <a className="capitalize" href={`/${e.link}`}>
              {e.label}
            </a>
          </div>
        );
      })}
    </nav>
  );
}
