"use client";

import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ComponentProps, ReactNode } from "react";

import { cx, type Cn } from "../cx.js";
import { Button } from "./button.js";
import { XIcon } from "./icons.js";

/** A modal dialog (Base UI Dialog): focus trap, Escape, scroll lock and aria wiring included. */
export const Dialog = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;

/** Backdrop, centered popup and portal in one. Put DialogTitle, DialogDescription and your content inside. */
export function DialogContent({
  className,
  children,
  size = "md",
  showClose = true,
  ...props
}: Cn<ComponentProps<typeof BaseDialog.Popup>> & { children?: ReactNode; size?: "md" | "lg"; showClose?: boolean }) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="zay-backdrop" />
      <BaseDialog.Viewport className="zay-dialog-viewport">
        <BaseDialog.Popup className={cx("zay-dialog", size === "lg" && "zay-dialog-lg", className)} {...props}>
          {children}
          {showClose ? (
            <BaseDialog.Close render={<Button variant="ghost" size="sm" icon aria-label="Close" className="zay-dialog-close" />}>
              <XIcon />
            </BaseDialog.Close>
          ) : null}
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

export function DialogBody({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-dialog-body", className)} {...props} />;
}

/** The row of buttons at the bottom. */
export function DialogActions({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("zay-dialog-actions", className)} {...props} />;
}

/** Closes the dialog; style it with render={<Button />}. */
export const DialogClose = BaseDialog.Close;

/**
 * A dialog that asks for a decision and cannot be dismissed by clicking outside
 * (Base UI AlertDialog): use it for destructive or irreversible actions.
 */
export const AlertDialog = BaseAlertDialog.Root;
export const AlertDialogTrigger = BaseAlertDialog.Trigger;
export const AlertDialogClose = BaseAlertDialog.Close;

export function AlertDialogContent({ className, children, ...props }: Cn<ComponentProps<typeof BaseAlertDialog.Popup>> & { children?: ReactNode }) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className="zay-backdrop" />
      <BaseAlertDialog.Viewport className="zay-dialog-viewport">
        <BaseAlertDialog.Popup className={cx("zay-dialog", className)} {...props}>
          {children}
        </BaseAlertDialog.Popup>
      </BaseAlertDialog.Viewport>
    </BaseAlertDialog.Portal>
  );
}

export function AlertDialogTitle({ className, ...props }: Cn<ComponentProps<typeof BaseAlertDialog.Title>>) {
  return <BaseAlertDialog.Title className={cx("zay-dialog-title", className)} {...props} />;
}

export function AlertDialogDescription({ className, ...props }: Cn<ComponentProps<typeof BaseAlertDialog.Description>>) {
  return <BaseAlertDialog.Description className={cx("zay-dialog-description", className)} {...props} />;
}
