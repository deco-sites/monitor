import type { ImageWidget } from "apps/admin/widgets.ts";

export interface HighlightProps {
  title?: string;
  ListHighlight?: ListHighlightProps[];
}

export interface ListHighlightProps {
  ancor: string;
  title?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  img?: ImageWidget;
}

export default function Highlight({ title, ListHighlight }: HighlightProps) {
  return (
    <div>
      <div class="flex flex-col">
        <div class="flex">
          {title && <p class="">{title}</p>}
        </div>
      </div>
    </div>
  );
}
