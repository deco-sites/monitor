import type { ImageWidget } from "apps/admin/widgets.ts";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import BgReplaceBySection from "../../islands/BgReplaceBySection.tsx";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export interface MenuTopProps {
  label?: AvailableIcons;
  text: string;
  href: string;
}

export interface extraLinkItem {
  text: string;
  href: string;
}

export interface Props {
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };
}

function Header({
  navItems = [],
  logo,
}: Props) {
  return (
    <>
      <BgReplaceBySection />
      <header
        id="header"
        class={`bg-transparent fixed w-full z-50`}
        style={{ height: headerHeight }}
      >
        <div>
          <Navbar items={navItems} logo={logo} />
        </div>
      </header>
    </>
  );
}

export default Header;
