import Image from "apps/website/components/Image.tsx";
import Header from "../../components/ui/SectionHeader.tsx";
import { useMemo } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Image {
  image: ImageWidget;
  altText: string;
}

export interface Props {
  title?: string;
  description?: string;
  images?: Image[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

const IMAGES = [
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
  },
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
  },
];

function Logos(props: Props) {
  const {
    title,
    description,
    images,
    layout,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class="backgroundCircleMobile md:backgroundCircleDesktop h-[900px] md:h-[1200px] py-28">
      <div class="w-full h-full 3xl:container xl:mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8 lg:gap-12 lg:py-10 lg:px-0">
        <Header
          title={title}
          description={description}
          alignment={layout?.headerAlignment || "center"}
        />
        <div class="flex gap-8 flex-row flex-wrap w-full text-center items-center justify-center">
          {list.map((element) => (
            <div class="block">
              <div class="flex bg-white w-[125px] logosSizeMore1580 h-[125px] 2xl:w-[250px] 2xl:h-[250px] xl:w-[220px] xl:h-[220px] lg:w-[180px] lg:h-[180px] md:w-[130px] md:h-[130px]  rounded-full items-center justify-center">
                <img
                  src={element.image}
                  alt={element.altText || ""}
                  class="w-full border-none object-cover px-3 2xl:px-12 xl:px-10 lg:px-6 md:px-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logos;
