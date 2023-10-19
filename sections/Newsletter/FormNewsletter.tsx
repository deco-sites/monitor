import { useSignal } from "@preact/signals";
import { FormProps } from "./Newsletter.tsx";
import actionFormNewsletter from "deco-sites/start/actions/DispatchFormNewsletter.ts";
import Icon from "../../components/ui/Icon.tsx";

export interface Props {
  /** @format html */
  title: string;
  form: FormProps;
}

type IdCurrentTarget =
  | "email"
  | "name"
  | "phone"
  | "businessName"
  | "plataform"
  | "origin";

interface FormBody {
  email: string;
  name: string;
  phone: string;
  businessName: string;
  plataform: string;
  origin: string;
}

export default function FormNewsletter({ form, title }: Props) {
  const isLoading = useSignal(false);
  const isSuccess = useSignal(false);

  const err = useSignal({
    email: "",
    name: "",
    phone: "",
    businessName: "",
  });
  const formControl = useSignal({
    email: "",
    name: "",
    phone: "",
    businessName: "",
    plataform: form?.plataformOptions[0] ?? "",
    origin: form?.origin[0] ?? "",
  });

  const isValid = (item: string) => ({
    name: item?.length < 3 || item?.length > 150,
    email: !/\S+@\S+\.\S+/.test(item),
    phone: item.length < 11 || item.length > 13,
    businessName: item.length < 2 || item.length > 150,
    plataform: false,
    origin: false,
  });

  function handleChange(
    { currentTarget }:
      | React.TargetedEvent<HTMLInputElement>
      | React.TargetedEvent<HTMLSelectElement>,
  ) {
    console.log(currentTarget.value);
    if (!isValid(currentTarget.value)[currentTarget.id as IdCurrentTarget]) {
      err.value = { ...err.value, [currentTarget.id]: "" };
    }
    formControl.value[currentTarget.id as IdCurrentTarget] =
      currentTarget.value;
  }

  const submitForm = (e: React.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValidName = true;
    let isValidEmail = true;
    let isValidPhone = true;
    let isValidBusinessName = true;
    if (isValid(formControl.value.name)["name"]) {
      err.value = { ...err.value, name: "Esse nome não é valido" };
      isValidName = false;
    } else {
      isValidName = true;
      err.value = { ...err.value, name: "" };
    }
    if (isValid(formControl.value.email)["email"]) {
      err.value = { ...err.value, email: "Esse email não é valido" };
      isValidEmail = false;
    } else {
      err.value = { ...err.value, email: "" };
      isValidEmail = true;
    }
    if (isValid(formControl.value.phone)["phone"]) {
      err.value = { ...err.value, phone: "Esse número não é valido" };
      isValidPhone = false;
    } else {
      err.value = { ...err.value, phone: "" };
      isValidPhone = true;
    }
    if (isValid(formControl.value.businessName)["businessName"]) {
      err.value = { ...err.value, businessName: "Essa empresa não é valida" };
      isValidBusinessName = false;
    } else {
      err.value = { ...err.value, businessName: "" };
      isValidBusinessName = true;
    }

    if (isValidBusinessName && isValidEmail && isValidName && isValidPhone) {
      // DEU CERTO
      isLoading.value = true;
      actionFormNewsletter({
        body: { ...formControl.value },
        url:
          `https://api.rd.services/platform/conversions?api_key=${form.token}`,
      }).then((res) => {
        if (res?.event_uuid) {
          isSuccess.value = true;
          setTimeout(() => {
            isSuccess.value = false;
          }, 3000);
        }
        isLoading.value = false;
      }).catch((err) => {
        isLoading.value = false;
        console.log(err, "DEU RUIM");
      });
    }
  };

  console.log(isSuccess);

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
            onChange={handleChange}
          />
          {err.value?.name && (
            <p class="text-[#FE075F] text-semibold text-xs">
              {err.value?.name}
            </p>
          )}
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
          {err.value.email && (
            <p class="text-[#FE075F] text-semibold text-xs">
              {err.value.email}
            </p>
          )}
        </label>
      </div>
      <div class="w-full flex flex-col md:flex-row md:gap-2 gap-4">
        <label class="w-full" htmlFor="phone">
          <input
            id="phone"
            type="phone"
            class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
            placeholder={form?.placeholders?.phone}
            value={formControl.value.phone}
            onChange={handleChange}
            maxLength={13}
          />
          {err.value.phone && (
            <p class="text-[#FE075F] text-semibold text-xs">
              {err.value.phone}
            </p>
          )}
        </label>
        <label class="w-full" htmlFor="businessName">
          <input
            id="businessName"
            type="text"
            class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
            placeholder={form?.placeholders?.businessName}
            value={formControl.value.businessName}
            onChange={handleChange}
          />
          {err.value.businessName && (
            <p class="text-[#FE075F] text-semibold text-xs">
              {err.value.businessName}
            </p>
          )}
        </label>
      </div>
      <label class="w-full" htmlFor="plataform">
        {/* SELECT */}
        <select
          id="plataform"
          class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
          onChange={handleChange}
        >
          {form.plataformOptions?.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>
      <label class="w-full" htmlFor="origin">
        {/* SELECT */}
        <select
          id="origin"
          class="border-none rounded-md bg-[#120D3B] text-[#969696] font-semibold w-full p-3"
          onChange={handleChange}
        >
          {form.origin?.map((option) => <option value={option}>{option}
          </option>)}
        </select>
      </label>
      <button
        type="submit"
        class="w-full p-3 rounded-md bg-[#FE075F] flex justify-center"
        disabled={isLoading.value}
      >
        {isLoading.value ? <div class="spinner p-3" /> : isSuccess.value
          ? (
            <Icon
              class="text-[#008000]"
              size={24}
              id="Check"
              strokeWidth={3}
            />
          )
          : form?.buttonSubmit?.text}
      </button>
    </form>
  );
}
