export type MetadescriptionType = string;

export type MenuDataType =
  | {
      label: string;
      link: string;
      children?: undefined;
    }
  | {
      label: string;
      link: string;
      children: {
        label: string;
        link: string;
      }[];
    };

export type HeaderHamburgerOpenState = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
