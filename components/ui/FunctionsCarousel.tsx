import type { ImageWidget } from "apps/admin/widgets.ts";
import { useSignal } from "@preact/signals";
import Icon, { AvailableIcons } from "./Icon.tsx";
import Slider from "./Slider.tsx";
import SliderJS from "../../islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";

export interface CarouselProps {
  title?: string;
  carousel?: ListCarouselProps[];

  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

export interface ListCarouselProps {
  selector: string;
  banners: BannerProps[];
}

export interface BannerProps {
  image: ImageWidget;
  alt: string;

  /** @format html */
  description: string;
}

interface TargetChangeEvent {
  value: string;
}

function BannerItem({ image, alt, description }: BannerProps) {
  return (
    <div class="flex flex-col md:flex-row items-center justify-between w-full gap-4">
      <div class="p-4 w-full flex-shrink-[1]">
        <img
          class="object-cover w-full h-full"
          src={image}
          alt={alt}
        />
      </div>
      <div class="font-bold text-[20px] md:text-[30px] p-4 md:p-0 flex-shrink-[2]">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

function Dots(
  { images, interval = 0 }: { images: BannerProps[]; interval: number },
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
      <ul class="carousel w-full flex justify-center absolute bottom-[-20px] md:bottom-0 col-span-full gap-4 z-10">
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

function Buttons() {
  return (
    <div
      style={{ transform: "translateY(-75px)" }}
      class="flex col-start-3 row-start-1"
    >
      <div class="flex items-start justify-center mr-8">
        <Slider.PrevButton class="bg-transparent text-white text-xl">
          <Icon
            class="block text-white"
            size={33}
            id="ChevronLeft"
            strokeWidth={13}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-start justify-center">
        <Slider.NextButton class="bg-transparent text-white text-xl">
          <Icon
            class="block text-white"
            size={33}
            id="ChevronRight"
            strokeWidth={13}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

const DEFAULT_PROPS = {
  title: "Funcionalidades",
  carousel: [
    {
      selector: "LTV Automático",
      banners: [
        {
          image:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
          alt: "Image",
          description:
            '<p>As principais <span style="color: rgb(19, 229, 214);" data-mce-style="color: rgb(19, 229, 214);">métricas </span>para o seu negócio em um só lugar</p>',
        },
        {
          image:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
          alt: "Image",
          description:
            '<p>As principais <span style="color: rgb(19, 229, 214);" data-mce-style="color: rgb(19, 229, 214);">métricas </span>para o seu negócio em um só lugar</p>',
        },
      ],
    },
    {
      selector: "SLA de Entrega",
      banners: [
        {
          image:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
          alt: "Image",
          description:
            '<p>As principais <span style="color: rgb(19, 229, 214);" data-mce-style="color: rgb(19, 229, 214);">métricas </span>TESTE TESTE TESTE</p>',
        },
        {
          image:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2511/0b3b1b56-5b2f-49ea-9ba0-ac55ff255d34",
          alt: "Image",
          description:
            '<p>As principais <span style="color: rgb(19, 229, 214);" data-mce-style="color: rgb(19, 229, 214);">métricas </span>para o seu negócio em um só lugar</p>',
        },
      ],
    },
  ],
};

export default function FunctionsCarousel(
  {
    title = DEFAULT_PROPS.title,
    carousel = DEFAULT_PROPS.carousel,
    interval = 0,
  }: CarouselProps,
) {
  const listImages = useSignal(carousel[0]?.banners);

  const id = useId();

  return (
    <>
      <div
        id="funcionalidade"
        style={{ transform: "translateY(200px)" }}
        class="lg:container mx-auto hidden md:block md:px-8"
      >
        <div class="flex flex-col relative mx-4 p-4 md:p-8 bg-[#120D3B] relative md:h-[700px]">
          <div class="flex justify-between gap-8">
            {title && <p class="text-[50px] font-semibold mb-4">{title}</p>}
            <div class="w-40 flex justify-between">
            </div>
          </div>
          <div class="flex justify-between h-full">
            <div class="flex flex-col gap-4">
              {carousel.map(({ selector, banners }) => (
                <div>
                  <p
                    class={`${
                      banners === listImages.value
                        ? "text-[#13E5D6]"
                        : "cursor-pointer"
                    } text-[22px] font-bold`}
                    onClick={() => {
                      if (banners !== listImages.value) {
                        listImages.value = banners;
                      }
                    }}
                  >
                    {selector}
                  </p>
                </div>
              ))}
            </div>
            <div class="md:w-[75%] relative flex justify-end h-full">
              <div
                id={id}
                style={{ boxShadow: "0px 4px 44px 10px rgba(4, 2, 19, 0.40)" }}
                class="absolute md:h-[95%] grid grid-cols-[48px_1fr_48px_48px] grid-rows-[48px_1fr_48px] gap-4 bg-[#120D3B] p-4"
              >
                <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6">
                  {listImages.value?.map((
                    image: BannerProps,
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
                <Buttons />

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
      <div
        style={{ transform: "translateY(120px)" }}
        class="lg:container mx-auto md:hidden px-4"
      >
        <div class="flex flex-col relative mx-4 p-4 pb-8 md:p-8 bg-[#120D3B] gap-4">
          <div class="flex flex-col gap-2">
            {title && <p class="text-[20px] font-semibold mb-4">{title}</p>}
            <div class="w-full flex">
              <select
                class="w-full bg-transparent border border-white p-2 text-white"
                onChange={(e) => {
                  e.currentTarget.value;
                  listImages.value = JSON.parse(e.currentTarget.value);
                }}
              >
                {carousel.map(({ selector, banners }) => (
                  <option class="text-black" value={JSON.stringify(banners)}>
                    {selector}
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
                style={{ boxShadow: "0px 4px 44px 10px rgba(4, 2, 19, 0.40)" }}
                class="h-[95%] w-full flex flex-col gap-2 bg-[#120D3B] p-2"
              >
                <Slider class="carousel carousel-center w-full gap-2">
                  {listImages.value?.map((
                    image: BannerProps,
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
    </>
  );
}
