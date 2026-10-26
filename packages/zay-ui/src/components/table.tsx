import type { ComponentProps } from "react";

import { cx } from "../cx.js";

/** A data table in a bordered, horizontally scrollable frame. Use native <thead>, <tbody>, <tr>, <th>, <td> inside. */
export function Table({ className, wrapperClassName, ...props }: ComponentProps<"table"> & { wrapperClassName?: string }) {
  return (
    <div className={cx("zay-table-wrap", wrapperClassName)}>
      <table className={cx("zay-table", className)} {...props} />
    </div>
  );
}
