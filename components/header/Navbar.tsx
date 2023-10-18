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
            <img class="h-full w-[120px]" src={logo.src} alt={logo.alt} />
          </a>
        )}
        <div class="flex gap-2">
          <button class="rounded-md p-3 bg-[#240F51] transition-all duration-200 text-[#13E5D6] border border-[#13E5D6] font-bold text-xs">
            Login
          </button>
          <button class="rounded-md p-3 bg-[#FE075F] text-white font-bold text-xs">
            <a href="#form" class="w-full h-full">
              Solicitar demo
            </a>
          </button>
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden container mx-auto md:flex flex-row justify-center lg:justify-between items-center w-full md:px-8 py-6">
        <div class="flex-none">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block pr-3 lg:pr-4"
            >
              <img
                class="h-full w-[160px] lg:w-[200px] object-contain"
                src={logo.src}
                alt={logo.alt}
              />
            </a>
          )}
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex gap-2">
          <button class="rounded-md bg-[#240F51] transition-all duration-200 hover:bg-[#13E5D6] hover:text-[#120C45] text-[#13E5D6] border border-[#13E5D6] font-bold text-xs lg:text-sm p-2 lg:p-3">
            Login
          </button>
          <button class="rounded-md bg-[#FE075F] transition-all duration-200 text-white font-bold text-xs lg:text-sm p-2 lg:p-3 hover:bg-[#5F122D]">
            <a href="#form" class="w-full h-full">
              Solicitar demo
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
