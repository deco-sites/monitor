// import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export interface BgReplaceBySectionProps {
  rootId: string;
}

export default function BgReplaceBySection(
  { rootId }: BgReplaceBySectionProps,
) {
  let lastKnownScrollPosition = 0;
  let ticking = false;

  useEffect(() => {
    // CRIAR OBSERVER
    const header = document.getElementById(rootId);
    if (!header) {
      console.warn(
        "Missing necessary slider attributes. It will not work as intended. Necessary elements:",
        { header },
      );

      return;
    }
    const observer = new IntersectionObserver(
      (e) =>
        e.forEach((element) => {
          console.log(element);
          lastKnownScrollPosition = window.scrollY;
          if (!ticking) {
            self.requestAnimationFrame((e) => {
              if (lastKnownScrollPosition >= 0) {
                console.log("FOI", element);
                element.target?.classList?.add("bg-[#0D0838]");
                element.target?.classList?.remove("bg-transparent");
              } else {
                element.target?.classList?.remove("bg-[#0D0838]");
                element.target?.classList?.add("bg-transparent");
                console.log("NÃO FOI", element);
              }
              ticking = false;
            });
          }
        }),
    );

    observer.observe(header);

    // } else if (header) {
    //   header?.classList?.add('bg-transparent')
    //   header?.classList?.remove('bg-[#0D0838]')

    return () => {
      observer.disconnect();
    };
  });

  return <div />;
}
