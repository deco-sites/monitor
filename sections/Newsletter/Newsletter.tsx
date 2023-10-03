import type { ImageWidget } from "apps/admin/widgets.ts";

export interface NewsletterProps {
  title?: string;
  form?: FormProps;
  img?: ImageWidget;
  extraLinks?: ExtraLinksProps[];
}

export interface FormProps {
  placeholders?: {
    name?: string;
    email?: string;
    phone?: string;
    businessName?: string;
    plataform?: string;
    HowDidYouGetUp?: string;
  };
  plataformOptions?: string[];
  HowDidYouGetUpOptions?: string[];
  buttonSubmit?: {
    href?: string;
    text?: string;
  };
}

export interface ExtraLinksProps {
  href: string;
  text: string;
}

const DEFAULT_PROPS = {
  title: "Solicite contato do nosso time de consultores.",
  form: {
    placeholders: {
      name: "nome completo*",
      email: "e-mail*",
      phone: "telefone*",
      businessName: "nome empresa*",
      plataform: "Selecione a plataforma",
      HowDidYouGetUp: "Como você chegou até o monitor?",
    },
    plataformOptions: [],
    HowDidYouGetUpOptions: [],
    buttonSubmit: {
      href: "",
      text: "Solicitar contato",
    },
  },
};

export default function Newsletter(
  {
    title = DEFAULT_PROPS.title,
    form = DEFAULT_PROPS.form,
    img = "",
    extraLinks = [],
  }: NewsletterProps,
) {
  return (
    <div class="relative z-[0]">
      <div class="lg:container w-full lg:mx-auto flex flex-col md:flex-row md:mx-4">
        <img src={img} alt={"Newsletter"} class="w-full h-full object-cover" />
        <div class="lg:p-16 md:p-12 p-6 w-full">
          <form class="flex flex-col items-center justify-center w-full h-full gap-4 bg-[#1B0A41]">
            <p class="text-[20px] md:text-[46px] font-semibold text-start mb-4">
              {title}
            </p>
            <div class="w-full flex flex-col md:flex-row gap-2">
              <label class="w-full" htmlFor="name">
                <input
                  id="name"
                  type="text"
                  class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
                  placeholder={form?.placeholders?.name}
                />
              </label>
              <label class="w-full" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
                  placeholder={form?.placeholders?.email}
                />
              </label>
            </div>
            <div class="w-full flex flex-col md:flex-row gap-2">
              <label class="w-full" htmlFor="phone">
                <input
                  type="phone"
                  class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
                  placeholder={form?.placeholders?.phone}
                />
              </label>
              <label class="w-full" htmlFor="businessName">
                <input
                  id="businessName"
                  type="text"
                  class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
                  placeholder={form?.placeholders?.businessName}
                />
              </label>
            </div>
            <label class="w-full" htmlFor="plataform">
              {/* SELECT */}
              <input
                id="plataform"
                type="text"
                class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
                placeholder={form?.placeholders?.plataform}
              />
            </label>
            <label class="w-full" htmlFor="HowDidYouGetUp">
              {/* SELECT */}
              <input
                id="HowDidYouGetUp"
                type="text"
                class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
                placeholder={form?.placeholders?.HowDidYouGetUp}
              />
            </label>
            <button
              type="submit"
              class="w-full p-3 rounded-md bg-[#FE075F]"
            >
              {form?.buttonSubmit?.text}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
