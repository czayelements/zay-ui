import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { Avatar } from "../components/avatar.js";

export type TestimonialItem = { quote: ReactNode; name: ReactNode; position?: ReactNode; avatar?: string; initials?: string };

/** One quote with its author. */
export function Testimonial({ quote, name, position, avatar, initials, className, ...props }: Omit<ComponentProps<"figure">, "children"> & TestimonialItem) {
  return (
    <figure className={cx("zay-testimonial", className)} {...props}>
      <blockquote>{quote}</blockquote>
      <figcaption>
        <Avatar src={avatar} fallback={initials} />
        <span>
          <strong>{name}</strong>
          {position ? <span>{position}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}

/** Several testimonials in a responsive grid. */
export function Testimonials({ items, className, ...props }: ComponentProps<"div"> & { items: TestimonialItem[] }) {
  return (
    <div className={cx("zay-testimonials", className)} {...props}>
      {items.map((item, i) => (
        <Testimonial key={i} {...item} />
      ))}
    </div>
  );
}
