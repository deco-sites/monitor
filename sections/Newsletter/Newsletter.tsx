import type { ImageWidget } from "apps/admin/widgets.ts";
import FormNewsletter from "../../islands/FormNewsletter.tsx";

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
    origin?: string;
  };
  plataformOptions: string[];
  origin: string[];
  buttonSubmit?: {
    href?: string;
    text?: string;
  };
  token?: string;
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
      origin: "Como você chegou até o monitor?",
    },
    plataformOptions: [],
    origin: [],
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
      <div class="w-full flex flex-col md:flex-row">
        <img
          src={img}
          alt={"Newsletter"}
          class="inline-block object-cover w-full"
        />
        <div class="lg:p-24 md:p-2 px-6 py-10 w-full bg-[#1B0A41]">
          <FormNewsletter form={form} title={title} />
        </div>
      </div>
    </div>
  );
}
