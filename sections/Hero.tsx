import type { ImageWidget } from "apps/admin/widgets.ts";
import { asset } from "$fresh/runtime.ts";

export interface Props {
  images?: {
    image: ImageWidget;
    mobileImage?: ImageWidget;
  };
  title?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  layout?: {
    alignment?: "TEXT | IMAGE" | "IMAGE | TEXT";
  };
}

export default function Hero({
  title = "deco.cx",
  images = { image: "" },
  description = "",
  cta = { text: "teste", href: "#" },
  layout = {
    alignment: "TEXT | IMAGE",
  },
}: Props) {
  return (
    <section id="#produto" class="bg-[#0D0838] w-full pt-14 relative">
      <img
        class="absolute right-0 top-0"
        src={asset("/BackgroundImage.png")}
        alt={"background"}
      />

      <div
        class={`xl:container md:pt-28 mx-4 lg:mx-6 xl:mx-16 md:px-12 2xl:mx-auto mt-8 md:mt-12 mb-4 md:mb-0 text-xl md:text-base relative pb-4 md:pb-8 lg:pb-14 2xl:pb-28
				${
          layout?.alignment === "TEXT | IMAGE"
            ? "flex flex-col items-center md:items-start md:flex-row-reverse"
            : "flex flex-col-reverse items-center md:items-start md:flex-row"
        }
				`}
      >
        <div class={`w-full hidden md:block`}>
          <img
            class={`object-cover w-full absolute bottom-0 md:w-[50%]
						${
              layout?.alignment === "TEXT | IMAGE"
                ? "lg:right-12 right-1"
                : "lg:left-12 left-1"
            }`}
            src={images?.image}
            alt={title}
          />
        </div>
        <div class={`mb-10 w-full block md:hidden`}>
          <img
            class="object-cover w-full"
            src={images?.mobileImage}
            alt={title}
          />
        </div>

        <div
          class={`flex flex-col gap-2 w-3/4 
					${
            layout?.alignment === "TEXT | IMAGE"
              ? "items-center md:items-start"
              : "items-center md:items-end"
          }
				mb-10 md:mb-0 lg:pt-4`}
        >
          <div class="font-semibold text-3xl lg:text-6xl lg:leading-[60px] xl:w-3/4">
            {title}
          </div>
          <p class="xl:w-3/4">{description}</p>
          {cta?.text && (
            <button
              class={`bg-[#FE075F] mt-4 p-3 rounded-md font-bold text-sm tracking-widest`}
            >
              <a href={cta?.href ?? "#"}>
                {cta?.text ?? "."}
              </a>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
