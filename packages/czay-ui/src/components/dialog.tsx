"use client";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ComponentProps, ReactNode } from "react";

import { cx } from "../cx.js";

type Cn<T> = Omit<T, "className"> & { className?: string };

/** A modal dialog (Base UI Dialog): focus trap, Escape, scroll lock and aria wiring included. */
export const Dialog = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;

/** Backdrop, centered popup and portal in one. Put DialogTitle, DialogDescription and your content inside. */
export function DialogContent({ className, children, ...props }: Cn<ComponentProps<typeof BaseDialog.Popup>> & { children?: ReactNode }) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="zay-backdrop" />
      <BaseDialog.Viewport className="zay-dialog-viewport">
        <BaseDialog.Popup className={cx("zay-dialog", className)} {...props}>
          {children}
        </BaseDialog.Popup>
      </BaseDialog.Viewport>
    </BaseDialog.Portal>
  );
}

export function DialogTitle({ className, ...props }: Cn<ComponentProps<typeof BaseDialog.Title>>) {
  return <BaseDialog.Title className={cx("zay-dialog-title", className)} {...props} />;
}

export function DialogDescription({ className, ...props }: Cn<ComponentProps<typeof BaseDialog.Description>>) {
  return <BaseDialog.Description className={cx("zay-dialog-description", className)} {...props} />;
}

/** The row of buttons at the bottom. */
export function DialogActions({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-dialog-actions", className)} {...props} />;
}

/** Closes the dialog; style it with buttonClass() or pass render={<Button />}. */
export const DialogClose = BaseDialog.Close;
