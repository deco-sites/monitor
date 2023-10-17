import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function BgReplaceBySection() {
  let header = null;

  useEffect(() => {
    // CRIAR OBSERVER

    const observer = new IntersectionObserver(
      (e) =>
        e.forEach((element) => {
          element.target.addEventListener("scroll", (e) => {
            if (window.scrollY > 0) {
              element.target?.classList?.add("bg-[#0D0838]");
              element.target?.classList?.remove("bg-transparent");
            } else {
              element.target?.classList?.remove("bg-[#0D0838]");
              element.target?.classList?.add("bg-transparent");
            }
          });
        }),
    );

    header = document.querySelector("#header")
      ? document.querySelector("#header")
      : null;

    if (header) {
      observer.observe(header);

      // } else if (header) {
      //   header?.classList?.add('bg-transparent')
      //   header?.classList?.remove('bg-[#0D0838]')
    }

    return () => {
      observer.disconnect();
    };
  });

  return <div />;
}
