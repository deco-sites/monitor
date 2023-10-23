import type { ImageWidget } from "apps/admin/widgets.ts";
import { useSignal } from "@preact/signals";
import Icon from "./Icon.tsx";
import Slider from "./Slider.tsx";
import SliderJS from "../../islands/SliderJS.tsx";
import SliderJSCustom from "../../islands/SliderJSCustom.tsx";
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
  ancor?: string;
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

function BannerItem({ image, title, description, cta }: HighlightProps) {
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
  { images, interval = 0 }: { images: HighlightProps[]; interval: number },
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
      <ul class="carousel w-full flex justify-between col-span-full gap-4 z-10">
        {images?.map(({ ancor }, index: number) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="pt-2 pb-0 md:py-5 summary">
                {ancor}
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function DotsCustom(
  { images, interval = 0 }: { images: HighlightProps[]; interval: number },
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
      <ul class="w-full flex justify-between col-span-full gap-4 z-10">
        <Slider.DotCustom className="border border-white p-2 text-white bg-transparent w-full">
          {images?.map(({ ancor }, index: number) => (
            <option value={index}>{ancor}</option>
          ))}
        </Slider.DotCustom>
      </ul>
    </>
  );
}

const DEFAULT_PROPS = {
  title: "Destaques",
  ListHighlight: [
    {
      ancor: "LTV Automático",
      title: "Entenda como os usuários se comportam no seu e-commerce",
      description: "Entenda como os usuários se comportam no seu e-commerce",
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
      ancor: "SLA de Entrega",
      title: "Entenda como os usuários se comportam no seu e-commerce",
      description: "Entenda como os usuários se comportam no seu e-commerce",
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
};

export default function Highlight({
  title = DEFAULT_PROPS.title,
  ListHighlight = DEFAULT_PROPS.ListHighlight,
  interval = 0,
}: ListHighlightProps) {
  const listImages = useSignal(ListHighlight);

  const idDesktop = useId();
  const idMobile = useId();
  return (
    <section id="destaques" class="relative z-1">
      <section class="lg:container md:mx-auto hidden md:flex mx-4 py-6 md:px-8 h-full bg-[#120D3B]">
        <div
          id={idDesktop}
          class="md:h-[95%] grid grid-cols-[1fr_1fr_48px_48px] grid-rows-[90px_1fr] gap-4 p-4 md:p-2"
        >
          <div class="flex items-center gap-12 md:pb-8 lg:pb-12 row-start-1 col-span-full">
            {title && <p class="text-[46px] font-semibold">{title}</p>}
            <div class="w-full h-full flex items-center">
              <Dots images={listImages.value} interval={interval} />
            </div>
          </div>
          <Slider class="carousel carousel-center w-full col-span-full row-span-[2/-1] gap-6">
            {listImages.value?.map((
              image: HighlightProps,
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

          <SliderJS
            rootId={idDesktop}
            interval={interval && interval * 1e3}
            infinite
          />
        </div>
      </section>
      <section class="md:hidden">
        <div class="flex flex-col relative mx-8 p-4 gap-4 bg-[#120D3B]">
          <div class="flex flex-col">
            {title && (
              <p class="text-[20px] font-semibold text-center">{title}</p>
            )}
          </div>
          <div
            id={idMobile}
            class="flex flex-col h-full"
          >
            <div class="w-full h-full flex items-center mb-4">
              <DotsCustom images={listImages.value} interval={interval} />
            </div>
            <div class="relative z-0 w-full flex h-full">
              <div class="h-[95%] w-full flex flex-col gap-2 bg-[#120D3B] p-2">
                <Slider class="carousel carousel-center w-full gap-2">
                  {listImages.value?.map((
                    image: HighlightProps,
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
              </div>
            </div>
            <SliderJSCustom
              rootId={idMobile}
              interval={interval && interval * 1e3}
              infinite
            />
          </div>
        </div>
      </section>
    </section>
  );
}
