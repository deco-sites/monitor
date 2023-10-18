import Image from "apps/website/components/Image.tsx";
import Header from "../../components/ui/SectionHeader.tsx";
import { useMemo } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Image {
  image: ImageWidget;
  altText: string;
}

const COLUMNS_GRID_DESKTOP = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

const COLUMNS_GRID_MOBILE = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
};

export interface Props {
  /** @format html */
  title?: string;
  description?: string;
  images?: Image[];
  layout?: {
    alignment: "TEXT | IMAGE" | "IMAGE | TEXT";
    columnImages: 1 | 2 | 3;
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

function Benefits(props: Props) {
  const {
    title,
    description,
    images,
    layout = { alignment: "TEXT | IMAGE", columnImages: 2 },
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div id="produto" class="relative w-full z-[1] bg-[#240F51]">
      {/* <div class="absolute h-full w-full  z-0 top-0 left-0" /> */}
      <div
        class={`w-full xl:container px-4 md:py-8 flex gap-8 lg:gap-12 lg:py-10 h-full lg:px-12 items-start lg:mx-auto
      `}
      >
        <div
          className={`flex ${
            layout.alignment === "TEXT | IMAGE"
              ? "flex-col md:flex-row"
              : "flex-col-reverse md:flex-row-reverse"
          }
          justify-start md:items-end
        `}
        >
          <div
            class={`flex md:w-[65%] ${
              layout.alignment === "TEXT | IMAGE"
                ? "mb-7 mr-7"
                : "mt-10 md:mt-4 md:ml-7"
            } md:mt-0 md:pb-3 ml-2 text-center md:text-left`}
          >
            {title &&
              (
                <h1
                  class={`text-3xl leading-8 md:text-4xl lg:text-[40px] xl:text-[50px] md:leading-10 lg:leading-[60px] font-semibold`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
            {description &&
              (
                <h2
                  class={`leading-6 lg:leading-8`}
                >
                  {description}
                </h2>
              )}
          </div>
          <div
            class={`grid md:w-[70%] grid-rows-[1fr_1fr] gap-8 mx-auto md:mx-0
          ${COLUMNS_GRID_MOBILE[2]} ${
              COLUMNS_GRID_DESKTOP[layout.columnImages]
            } `}
          >
            {list.map((element) => (
              <div class="flex justify-center md:justify-stretch">
                <div class="p-1 inline-block w-[130px] h-[130px] md:w-[140px] md:h-[140px] lg:w-[155px] lg:h-[155px] xl:w-[170px] xl:h-[170px] 2xl:w-[178px] 2xl:h-[178px]">
                  <div class="w-[140px] h-[140px] md:w-[164px] md:h-[164px] lg:w-[184px] lg:h-[184px] bg-white rounded-full flex justify-center items-center">
                    <img
                      src={element.image}
                      alt={element.altText || ""}
                      class="w-[110px] h-[110px] md:w-[140px] md:h-[140px] lg:w-[164px] lg:h-[164px] border-none object-scale-down"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
