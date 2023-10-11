import type { ImageWidget } from "apps/admin/widgets.ts";
import FormNewsletter from "deco-sites/start/sections/Newsletter/FormNewsletter.tsx";

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
    <div id="form" class="relative z-[0]">
      <div class="lg:container w-full lg:mx-auto flex flex-col md:flex-row md:mx-4">
        <img src={img} alt={"Newsletter"} class="w-full h-full object-cover" />
        <div class="2xl:p-12 lg:p-6 p-3 w-full bg-[#1B0A41]">
          <FormNewsletter form={form} title={title} />
        </div>
      </div>
    </div>
  );
}
