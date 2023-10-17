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
      id="vantagens"
      class="relative z-[1] lg:container px-6 md:px-8 mx-4 md:mx-auto md:translateY-[-35%] translateY-14"
    >
      <div class="flex flex-col md:grid grid-cols-3 gap-6 md:gap-10 lg:gap-16 xl:gap-20">
        {cards?.map((
          { image, title, description }: CardBenefits,
          index: number,
        ) => (
          <div
            key={index}
            style={{ boxShadow: "0px 24px 44px 0px rgba(0, 0, 0, 0.35)" }}
            class="flex flex-col bg-[#120D3B] rounded-sm hover:border-[1px] hover:-translate-y-4 transition-transform hover:divide-solid hover:border-[#FE075F] justify-center items-center gap-4 md:gap-8 p-6 py-10  md:p-10 md:py-16"
          >
            {image && (
              <div>
                <img src={image} alt={title ?? ""} />
              </div>
            )}
            {title && (
              <p class="mb-1 mt-0 md:mb-0 md:mt-8 font-bold text-lg lg:text-2xl xl:text-3xl">
                {title}
              </p>
            )}
            {description && <p class="lg:text-xl xl:text-2xl">{description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
