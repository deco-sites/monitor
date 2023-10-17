import { useSignal } from "@preact/signals";
import { FormProps } from "./Newsletter.tsx";

export interface Props {
  /** @format html */
  title: string;
  form: FormProps;
}

type IdCurrentTarget = 'email' | 'name' | 'phone' | 'businessName' | 'plataform' | 'origin'

export default function FormNewsletter({ form, title }: Props) {
  const isShow = useSignal(false);
  const formControl = useSignal({
    email: '',
    name: '',
    phone: '',
    businessName: '',
    plataform: '',
    origin: '',
  });

  function handleChange({ currentTarget }: React.TargetedEvent<HTMLInputElement>) {
    formControl.value[currentTarget.id as IdCurrentTarget] = currentTarget.value
  }

  const submitForm = (e: React.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(/\S+@\S+\.\S+/.test(formControl.value.email))
  };

  console.log(formControl.value, "FORM CONTROL")

  return (
    <form
      onSubmit={submitForm}
      class="flex flex-col items-center justify-center w-full h-full 2xl:gap-4 lg:gap-3 md:gap-2 gap-4"
    >
      <p class="text-[20px] md:text-[25px] lg:text-[30px] xl:text-[46px] font-semibold text-start mb-4 2xl:mb-3 lg:mb-2 md:mb-1">
        {title}
      </p>
      <div class="w-full flex flex-col md:flex-row md:gap-2 gap-4">
        <label class="w-full" htmlFor="name">
          <input
            id="name"
            type="text"
            class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
            placeholder={form?.placeholders?.name}
            value={formControl.value?.name}
            minLength={1}
            maxLength={100}
            onChange={handleChange}
          />
        </label>
        <label class="w-full" htmlFor="email">
          <input
            id="email"
            type="email"
            class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
            placeholder={form?.placeholders?.email}
            value={formControl.value?.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div class="w-full flex flex-col md:flex-row md:gap-2 gap-4">
        <label class="w-full" htmlFor="phone">
          <input
            type="phone"
            class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
            placeholder={form?.placeholders?.phone}
            value={formControl.value.phone}
            onChange={handleChange}
            maxLength={13}
          />
        </label>
        <label class="w-full" htmlFor="businessName">
          <input
            id="businessName"
            type="text"
            class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
            placeholder={form?.placeholders?.businessName}
            value={formControl.value.businessName}
            onChange={handleChange}
            minLength={1}
            maxLength={100}
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
          value={formControl.value.plataform}
          onChange={handleChange}
        />
      </label>
      <label class="w-full" htmlFor="origin">
        {/* SELECT */}
        <input
          id="origin"
          type="text"
          class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
          placeholder={form?.placeholders?.origin}
          value={formControl.value.origin}
          onChange={handleChange}
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
