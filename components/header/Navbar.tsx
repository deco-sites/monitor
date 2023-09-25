import Image from "apps/website/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";

function Navbar({ items, logo }: {
  items: INavItem[];
  logo?: { src: string; alt: string };
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center w-full px-2 py-5 gap-2"
      >
        {logo && (
          <a
            href="/"
            class="inline-flex items-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <img class="h-full" src={logo.src} alt={logo.alt} />
          </a>
        )}
        <div class="flex gap-2">
          <button class="rounded-md p-3 bg-transparent transition-all duration-200 text-[#13E5D6] border border-[#13E5D6] font-bold text-sm">
            Login
          </button>
          <button class="rounded-md p-3 bg-[#FE075F] text-white font-bold text-sm ">
            Solicitar demo
          </button>
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center w-full md:px-8 py-10">
        <div class="flex-none w-44">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block pr-4"
            >
              <img class="h-full" src={logo.src} alt={logo.alt} />
            </a>
          )}
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex gap-2">
          <button class="rounded-md p-3 bg-transparent transition-all duration-200 hover:bg-[#13E5D6] hover:text-[#120C45] text-[#13E5D6] border border-[#13E5D6] font-bold text-sm">
            Login
          </button>
          <button class="rounded-md p-3 bg-[#FE075F] transition-all duration-200 text-white font-bold text-sm hover:bg-[#5F122D]">
            Solicitar demo
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
