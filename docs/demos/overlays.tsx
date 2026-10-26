"use client";

import { useEffect, useState } from "react";

import {
  AlertDialog, AlertDialogClose, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger,
  Avatar, BellIcon, Button, CommandPalette, ContextMenu, ContextMenuContent, ContextMenuTrigger, CopyIcon, CreditCardIcon,
  Dialog, DialogActions, DialogBody, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger,
  Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger, EllipsisIcon, Field, FieldControl, FieldLabel,
  HoverCard, HoverCardContent, HoverCardTrigger, HomeIcon, Kbd, LogOutIcon, Menu, MenuCheckboxItem, MenuContent, MenuGroup, MenuItem, MenuLabel,
  MenuRadioGroup, MenuRadioItem, MenuSeparator, MenuShortcut, MenuSub, MenuSubContent, MenuSubTrigger, MenuTrigger, Popover,
  PopoverContent, PopoverDescription, PopoverTitle, PopoverTrigger, SettingsIcon, SparklesIcon, TrashIcon, Tooltip, TooltipContent,
  TooltipTrigger, UserIcon, useToast, type CommandGroup,
} from "@czayelements/zay-ui";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Edit profile</DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Make changes to your profile here. Click save when you are done.</DialogDescription>
        <DialogBody className="grid gap-4">
          <Field name="name">
            <FieldLabel>Name</FieldLabel>
            <FieldControl defaultValue="Ada Lovelace" />
          </Field>
          <Field name="handle">
            <FieldLabel>Username</FieldLabel>
            <FieldControl defaultValue="@ada" />
          </Field>
        </DialogBody>
        <DialogActions>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button variant="primary" />}>Save changes</DialogClose>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Delete account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This permanently deletes your account and removes your data from our servers. This action cannot be undone.
        </AlertDialogDescription>
        <div className="zay-dialog-actions">
          <AlertDialogClose render={<Button variant="outline" />}>Cancel</AlertDialogClose>
          <AlertDialogClose render={<Button variant="destructive" />}>Yes, delete</AlertDialogClose>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function DrawerDemo() {
  return (
    <>
      {(["right", "left", "bottom"] as const).map((side) => (
        <Drawer key={side} side={side}>
          <DrawerTrigger render={<Button variant="outline" />}>Open {side}</DrawerTrigger>
          <DrawerContent side={side}>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>You have 3 unread messages. Swipe to dismiss.</DrawerDescription>
            <div className="mt-6 grid gap-3">
              {["Ada commented on your pull request", "Deployment finished", "Billing receipt is ready"].map((text) => (
                <div key={text} className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm">
                  <BellIcon width={16} height={16} /> {text}
                </div>
              ))}
            </div>
            <div className="zay-dialog-actions">
              <DrawerClose render={<Button variant="primary" />}>Mark all as read</DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
    </>
  );
}

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Dimensions</PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>Set the dimensions of the layer.</PopoverDescription>
        <div className="mt-4 grid gap-3">
          <Field name="width">
            <FieldLabel>Width</FieldLabel>
            <FieldControl defaultValue="100%" />
          </Field>
          <Field name="height">
            <FieldLabel>Height</FieldLabel>
            <FieldControl defaultValue="25px" />
          </Field>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger href="#" className="text-sm font-medium underline underline-offset-4">
        @czaydev
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <Avatar fallback="CZ" />
          <div>
            <p className="text-sm font-semibold">zay-ui</p>
            <p className="text-sm text-muted-foreground">Accessible components and blocks for React, built on Base UI.</p>
            <p className="mt-2 text-xs text-subtle-foreground">Joined 2026</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function TooltipDemo() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" icon aria-label="Copy" />}>
          <CopyIcon />
        </TooltipTrigger>
        <TooltipContent side="bottom">
          Copy <Kbd>⌘C</Kbd>
        </TooltipContent>
      </Tooltip>
    </>
  );
}

export function MenuDemo() {
  const [bookmarks, setBookmarks] = useState(true);
  const [theme, setTheme] = useState("system");
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        Account <EllipsisIcon />
      </MenuTrigger>
      <MenuContent className="w-56">
        <MenuGroup>
          <MenuLabel>My account</MenuLabel>
          <MenuItem>
            <UserIcon /> Profile <MenuShortcut>⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <CreditCardIcon /> Billing <MenuShortcut>⌘B</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SettingsIcon /> Settings <MenuShortcut>⌘,</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
          Show bookmarks
        </MenuCheckboxItem>
        <MenuSub>
          <MenuSubTrigger>Theme</MenuSubTrigger>
          <MenuSubContent>
            <MenuRadioGroup value={theme} onValueChange={setTheme}>
              <MenuRadioItem value="light">Light</MenuRadioItem>
              <MenuRadioItem value="dark">Dark</MenuRadioItem>
              <MenuRadioItem value="system">System</MenuRadioItem>
            </MenuRadioGroup>
          </MenuSubContent>
        </MenuSub>
        <MenuSeparator />
        <MenuItem destructive>
          <LogOutIcon /> Log out
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-36 w-72 place-items-center rounded-xl border border-dashed border-border-strong text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <MenuItem>
          <CopyIcon /> Copy <MenuShortcut>⌘C</MenuShortcut>
        </MenuItem>
        <MenuItem>
          <HomeIcon /> Open in new tab
        </MenuItem>
        <MenuSeparator />
        <MenuItem destructive>
          <TrashIcon /> Delete
        </MenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

const groups: CommandGroup[] = [
  {
    value: "Suggestions",
    items: [
      { value: "home", label: "Go to home", icon: <HomeIcon />, hint: "G H" },
      { value: "profile", label: "Open profile", icon: <UserIcon />, hint: "G P" },
      { value: "billing", label: "Billing", icon: <CreditCardIcon /> },
    ],
  },
  {
    value: "Actions",
    items: [
      { value: "ai", label: "Ask AI", icon: <SparklesIcon /> },
      { value: "settings", label: "Settings", icon: <SettingsIcon />, hint: "⌘," },
    ],
  },
];

export function CommandDemo() {
  const [open, setOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open command palette <Kbd>⌘K</Kbd>
      </Button>
      <CommandPalette open={open} onOpenChange={setOpen} groups={groups} onSelect={(item) => toast.add({ title: item.label, description: "Command selected" })} />
    </>
  );
}

export function ToastDemo() {
  const toast = useToast();
  return (
    <>
      <Button variant="outline" onClick={() => toast.add({ title: "Event created", description: "Sunday, December 03 at 9:00 AM" })}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.add({ title: "Changes saved", description: "Your profile is up to date.", type: "success" })}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.add({ title: "Something went wrong", description: "We could not reach the server.", type: "error" })}>
        Error
      </Button>
    </>
  );
}
