"use client";

import { Toast as BaseToast } from "@base-ui/react/toast";
import type { ReactNode } from "react";

import { AlertIcon, CheckCircleIcon, InfoIcon, XIcon } from "./icons.js";

/**
 * Toast notifications (Base UI Toast). Mount <Toaster> once near the root, then call
 * useToast().add({ title, description, type }) from anywhere inside it.
 *
 *   <Toaster>{app}</Toaster>
 *   const toast = useToast(); toast.add({ title: "Saved", type: "success" });
 */
export function Toaster({ children, timeout = 5000, limit = 3 }: { children?: ReactNode; timeout?: number; limit?: number }) {
  return (
    <BaseToast.Provider timeout={timeout} limit={limit}>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport className="zay-toast-viewport">
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
}

/** The toast manager: add(), close(), update(), promise(). */
export const useToast = BaseToast.useToastManager;

function ToastList() {
  const { toasts } = BaseToast.useToastManager();
  return toasts.map((toast) => {
    const Icon = toast.type === "success" ? CheckCircleIcon : toast.type === "error" ? AlertIcon : InfoIcon;
    return (
      <BaseToast.Root key={toast.id} toast={toast} className="zay-toast" data-type={toast.type}>
        <BaseToast.Content className="zay-toast-content">
          <span className="zay-toast-icon">
            <Icon />
          </span>
          <div className="zay-toast-text">
            <BaseToast.Title className="zay-toast-title" />
            <BaseToast.Description className="zay-toast-description" />
          </div>
          <BaseToast.Close className="zay-toast-close" aria-label="Dismiss">
            <XIcon />
          </BaseToast.Close>
        </BaseToast.Content>
      </BaseToast.Root>
    );
  });
}
