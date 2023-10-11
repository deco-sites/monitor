import { useSignal } from "@preact/signals";
import { FormProps } from "./Newsletter.tsx";

export interface Props {
  /** @format html */
  title: string
  form: FormProps
}

export default function FormNewsletter({ form, title }: Props) {
  const isShow = useSignal(false);

  const submitForm = (e: React.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault()
    
  }

  return (
    <form onSubmit={submitForm} class="flex flex-col items-center justify-center w-full h-full 2xl:gap-4 lg:gap-3 md:gap-2">
      <p class="text-[20px] md:text-[46px] font-semibold text-start mb-4 2xl:mb-3 lg:mb-2 md:mb-1">
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
  );
}
