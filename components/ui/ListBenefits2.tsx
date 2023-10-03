import type { ImageWidget } from "apps/admin/widgets.ts";

export interface ListBenefits2Props {
  title?: string;
  cards?: CardBenefits[];
}

export interface CardBenefits {
  image: ImageWidget;
  title: string;
  description: string;
}

const DEFAULT_PROPS = {
  title: "Vantagens do Monitor na sua empresa",
  cards: [
    {
      image: "",
      title: "",
      description: "",
    },
  ],
};

export default function ListBenefits2({
  title = DEFAULT_PROPS.title,
  cards = DEFAULT_PROPS.cards,
}: ListBenefits2Props) {
  return (
    <div
      style={{ transform: "translateY(-140px)" }}
      class="relative z-[1] lg:container mx-4 md:mx-auto"
    >
      <div class="flex flex-col md:grid grid-cols-3 gap-5 md:gap-10 lg:gap-16 xl:gap-20">
        {cards?.map((
          { image, title, description }: CardBenefits,
          index: number,
        ) => (
          <div
            key={index}
            style={{ boxShadow: "0px 24px 44px 0px rgba(0, 0, 0, 0.35)" }}
            class="flex flex-col bg-[#120D3B] rounded-sm hover:border-[1px] hover:-translate-y-4 transition-transform hover:divide-solid hover:border-[#FE075F] justify-center items-center gap-5 md:gap-8 p-6 md:p-10 md:py-16"
          >
            {image && (
              <div>
                <img src={image} alt={title ?? ""} />
              </div>
            )}
            {title && <p class="mb-1 mt-0 md:mb-0 md:mt-8">{title}</p>}
            {description && <p class="w">{description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}