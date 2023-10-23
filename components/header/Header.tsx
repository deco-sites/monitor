import type { ImageWidget } from "apps/admin/widgets.ts";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import BgReplaceBySection from "../../islands/BgReplaceBySection.tsx";
import Drawers from "$store/islands/Drawers.tsx";

export interface NavItem {
  label: string;
  href: string;
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
  hrefLogin?: string;
}

function Header({
  navItems = [],
  logo,
  hrefLogin = "#",
}: Props) {
  return (
    <header>
      <Drawers menu={{ items: navItems, logo }}>
        <BgReplaceBySection />
        <header
          id="header"
          class="bg-transparent fixed w-full z-50"
          style={{ height: headerHeight }}
        >
          <div>
            <Navbar items={navItems} logo={logo} hrefLogin={hrefLogin} />
          </div>
        </header>
      </Drawers>
    </header>
  );
}

export default Header;
