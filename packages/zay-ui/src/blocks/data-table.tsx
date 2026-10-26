import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";
import { Table } from "../components/table.js";

export type DataTableColumn<T> = {
  key: string;
  header: ReactNode;
  /** How to render a cell. Defaults to row[key]. */
  render?: (row: T) => ReactNode;
  align?: "start" | "end";
};

/**
 * A titled table card: heading and actions on top, rows in the middle, a footer
 * (a count, pagination) below. Generic over your row type.
 */
export function DataTable<T extends Record<string, unknown>>({
  title,
  description,
  actions,
  columns,
  rows,
  rowKey,
  footer,
  empty,
  className,
  ...props
}: Omit<ComponentProps<"div">, "title"> & {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  footer?: ReactNode;
  empty?: ReactNode;
}) {
  return (
    <div className={cx("zay-datatable", className)} {...props}>
      {title || actions ? (
        <div className="zay-datatable-head">
          <div>
            {title ? <h3>{title}</h3> : null}
            {description ? <p>{description}</p> : null}
          </div>
          {actions ? <div className="zay-datatable-actions">{actions}</div> : null}
        </div>
      ) : null}
      <Table wrapperClassName="zay-datatable-wrap">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={c.align === "end" ? "zay-table-numeric" : undefined}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="zay-datatable-empty">
                {empty ?? "No results."}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={rowKey(row)}>
                {columns.map((c) => (
                  <td key={c.key} className={c.align === "end" ? "zay-table-numeric" : undefined}>
                    {c.render ? c.render(row) : (row[c.key] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </Table>
      {footer ? <div className="zay-datatable-foot">{footer}</div> : null}
    </div>
  );
}
