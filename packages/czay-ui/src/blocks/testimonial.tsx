import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

/** A quote with its author. `avatar` is an image URL. */
export function Testimonial({
  quote,
  name,
  role,
  avatar,
  className,
  ...props
}: Omit<ComponentProps<"figure">, "children"> & { quote: ReactNode; name: ReactNode; role?: ReactNode; avatar?: string }) {
  return (
    <figure className={cx("zay-testimonial", className)} {...props}>
      <blockquote>{quote}</blockquote>
      <figcaption>
        {avatar ? <img className="zay-avatar" src={avatar} alt="" width={40} height={40} /> : null}
        <span>
          <strong>{name}</strong>
          {role ? <span className="zay-testimonial-role"> · {role}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}
