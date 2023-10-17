import type { ImageWidget } from "apps/admin/widgets.ts";
import { useSignal } from "@preact/signals";
import Icon from "./Icon.tsx";
import Slider from "./Slider.tsx";
import SliderJS from "../../islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface ListHighlightProps {
  title?: string;
  ListHighlight?: HighlightProps[];

  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

export interface HighlightProps {
  ancor: string;
  banners: HighlightItem[];
}

export interface HighlightItem {
  title?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  image?: {
    srcMobile: ImageWidget;
    srcDesktop: ImageWidget;
  };
}

function BannerItem({ image, title, description, cta }: HighlightItem) {
  return (
    <div class="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-4">
      <div class="p-4 w-full">
        <img
          class="object-cover w-full h-full hidden md:block"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image?.srcDesktop ?? ""}
          alt={title}
          decoding="async"
          loading="lazy"
        />
        <img
          class="object-cover w-full h-full md:hidden"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image?.srcMobile ?? ""}
          alt={title}
          decoding="async"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col font-semibold gap-5 md:gap-16">
        {title && (
          <div>
            <p class="md:text-[35px] text-[20px] font-semibold">{title}</p>
          </div>
        )}
        {description && (
          <div>
            <p class="font-semibold text-xs md:text-base md:leading-7">
              {description}
            </p>
          </div>
        )}
        {cta?.text && (
          <a href={cta?.href}>
            <button class="bg-[#FE075F] text-white text-sm font-semibold p-2 rounded-md">
              {cta?.text}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

function Dots(
  { images, interval = 0 }: { images: HighlightItem[]; interval: number },
) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel w-full flex justify-center absolute bottom-0 left-0 col-span-full gap-4 z-10">
        {images?.map((_, index: number) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="pt-2 pb-0 md:py-5">
                <div
                  class="w-3 h-3 rounded-full group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

const DEFAULT_PROPS = {
  title: "Destaques",
  ListHighlight: [
    {
      ancor: "LTV Automático",
      banners: [
        {
          title: "Entenda como os usuários se comportam no seu e-commerce",
          description:
            "Entenda como os usuários se comportam no seu e-commerce",
          cta: {
            text: "Teste Grátis por 15 dias",
            href: "#",
          },
          image: {
            srcMobile:
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
            srcDesktop:
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
          },
        },
        {
          title: "Entenda como os usuários se comportam no seu e-commerce",
          description:
            "Entenda como os usuários se comportam no seu e-commerce",
          cta: {
            text: "Teste Grátis por 15 dias",
            href: "#",
          },
          image: {
            srcMobile:
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
            srcDesktop:
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
          },
        },
      ],
    },
    {
      ancor: "SLA de Entrega",
      banners: [
        {
          title: "Entenda como os usuários se comportam no seu e-commerce",
          description:
            "Entenda como os usuários se comportam no seu e-commerce",
          cta: {
            text: "Teste Grátis por 15 dias",
            href: "#",
          },
          image: {
            srcMobile:
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
            srcDesktop:
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
          },
        },
        {
          title: "Entenda como os usuários se comportam no seu e-commerce",
          description:
            "Entenda como os usuários se comportam no seu e-commerce",
          cta: {
            text: "Teste Grátis por 15 dias",
            href: "#",
          },
          image: {
            srcMobile:
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
            srcDesktop:
              "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
          },
        },
      ],
    },
  ],
};

export default function Highlight({
  title = DEFAULT_PROPS.title,
  ListHighlight = DEFAULT_PROPS.ListHighlight,
  interval = 0,
}: ListHighlightProps) {
  const listImages = useSignal(ListHighlight[0]?.banners);

  const id = useId();
  return (
    <div id="destaques" class="relative z-1">
      <div class="lg:container md:mx-auto hidden md:flex flex-col mx-4 md:px-8 h-full">
        <div class="bg-[#120D3B] p-4 md:p-8 lg:p-12 h-full">
          <div class="flex items-center gap-6 md:pb-8 lg:pb-12">
            {title && <p class="text-[46px] font-semibold">{title}</p>}
            {ListHighlight?.map(({ ancor, banners }) => (
              <p
                class={`${
                  banners === listImages.value
                    ? "text-[#13E5D6] font-bold"
                    : "cursor-pointer font-medium"
                } text-[14px] `}
                onClick={() => {
                  if (banners !== listImages.value) {
                    listImages.value = banners;
                  }
                }}
              >
                {ancor}
              </p>
            ))}
          </div>
          <div
            id={id}
            class="md:h-[95%] grid grid-cols-[48px_1fr_48px_48px] grid-rows-[48px_1fr_48px] gap-4 p-4 md:p-2"
          >
            <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6">
              {listImages.value?.map((
                image: HighlightItem,
                index: number,
              ) => (
                <Slider.Item
                  index={index}
                  class="carousel-item w-full flex flex-col md:flex-row"
                >
                  <BannerItem {...image} />
                </Slider.Item>
              ))}
            </Slider>

            <Dots images={listImages.value} interval={interval} />

            <SliderJS
              rootId={id}
              interval={interval && interval * 1e3}
              infinite
            />
          </div>

        </div>
      </div>
      <div class="md:hidden">
        <div class="flex flex-col relative mx-8 p-4 gap-4 bg-[#120D3B]">
          <div class="flex flex-col gap-2">
            {title && (
              <p class="text-[20px] font-semibold mb-4 text-center">{title}</p>
            )}
            <div class="w-full flex text-white">
              <select
                class="w-full bg-transparent border border-white p-2 text-white"
                onChange={(e) => {
                  e.currentTarget.value;
                  listImages.value = JSON.parse(e.currentTarget.value);
                }}
              >
                {ListHighlight.map(({ ancor, banners }) => (
                  <option class="text-black" value={JSON.stringify(banners)}>
                    {ancor}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div class="flex h-full">
            <div class="flex flex-col gap-4">
            </div>
            <div class="relative z-0 w-full flex h-full">
              <div
                id={id}
                class="h-[95%] w-full flex flex-col gap-2 bg-[#120D3B] p-2"
              >
                <Slider class="carousel carousel-center w-full gap-2">
                  {listImages.value?.map((
                    image: HighlightItem,
                    index: number,
                  ) => (
                    <Slider.Item
                      index={index}
                      class="carousel-item w-full flex flex-col md:flex-row"
                    >
                      <BannerItem {...image} />
                    </Slider.Item>
                  ))}
                </Slider>

                <Dots images={listImages.value} interval={interval} />

                <SliderJS
                  rootId={id}
                  interval={interval && interval * 1e3}
                  infinite
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
