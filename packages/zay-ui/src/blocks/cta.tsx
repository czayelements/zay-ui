import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { Button } from "../components/button.js";
import { Input } from "../components/input.js";

/** A closing panel: heading, one sentence, actions. Always rendered in the dark palette. */
export function CtaPanel({
  title,
  description,
  actions,
  className,
  ...props
}: Omit<ComponentProps<"section">, "title"> & { title: ReactNode; description?: ReactNode; actions?: ReactNode }) {
  return (
    <section className={cx("zay-cta zay-dark", className)} {...props}>
      <div aria-hidden className="zay-cta-bg" />
      <div className="zay-cta-copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {actions ? <div className="zay-cta-actions">{actions}</div> : null}
    </section>
  );
}

/** An email capture: heading, a sentence and an inline form. Pass `onSubmit` or `action`. */
export function Newsletter({
  title,
  description,
  placeholder = "you@example.com",
  submitLabel = "Subscribe",
  note,
  className,
  ...props
}: Omit<ComponentProps<"form">, "title"> & { title: ReactNode; description?: ReactNode; placeholder?: string; submitLabel?: ReactNode; note?: ReactNode }) {
  return (
    <form className={cx("zay-newsletter", className)} {...props}>
      <div>
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
      <div>
        <div className="zay-newsletter-row">
          <Input type="email" name="email" required placeholder={placeholder} aria-label="Email address" size="lg" />
          <Button type="submit" variant="primary" size="lg">
            {submitLabel}
          </Button>
        </div>
        {note ? <p className="zay-newsletter-note">{note}</p> : null}
      </div>
    </form>
  );
}
