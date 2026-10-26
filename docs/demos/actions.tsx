"use client";

import { useState } from "react";

import {
  AlignCenterIcon, AlignLeftIcon, AlignRightIcon, ArrowRightIcon, BoldIcon, Button, ButtonGroup, ChevronLeftIcon, ChevronRightIcon,
  ItalicIcon, Kbd, MailIcon, PlusIcon, Spinner, StarIcon, Toggle, ToggleGroup, UnderlineIcon, buttonClass,
} from "@czayelements/zay-ui";

export function ButtonVariants() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="brand">Brand</Button>
      <Button variant="secondary">Secondary</Button>
      <Button>Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export function ButtonSizes() {
  return (
    <>
      <Button size="sm">Small</Button>
      <Button>Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="sm" variant="primary" icon aria-label="Add">
        <PlusIcon />
      </Button>
      <Button variant="primary" icon aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="lg" variant="primary" icon aria-label="Add">
        <PlusIcon />
      </Button>
    </>
  );
}

export function ButtonWithIcon() {
  return (
    <>
      <Button variant="primary">
        <MailIcon /> Login with email
      </Button>
      <Button variant="brand">
        Get started <ArrowRightIcon />
      </Button>
      <Button>
        <StarIcon /> Star
      </Button>
    </>
  );
}

export function ButtonLoading() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1800);
        }}
      >
        {loading ? "Saving…" : "Save changes"}
      </Button>
      <Button disabled>Disabled</Button>
    </>
  );
}

export function ButtonAsLink() {
  return (
    <>
      <a href="#" className={buttonClass({ variant: "primary" })}>
        A link styled as a button
      </a>
      <a href="#" className={buttonClass({ variant: "outline", size: "sm" })}>
        Small link
      </a>
    </>
  );
}

export function ButtonGroupDemo() {
  return (
    <>
      <ButtonGroup>
        <Button>Years</Button>
        <Button>Months</Button>
        <Button>Days</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon aria-label="Previous">
          <ChevronLeftIcon />
        </Button>
        <Button icon aria-label="Next">
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </>
  );
}

export function SpinnerDemo() {
  return (
    <>
      <Spinner />
      <Spinner style={{ fontSize: "1.5rem" }} />
      <Spinner style={{ fontSize: "2rem", color: "var(--brand)" }} />
    </>
  );
}

export function ToggleDemo() {
  return (
    <>
      <Toggle aria-label="Favourite">
        <StarIcon />
      </Toggle>
      <Toggle outline aria-label="Bold" defaultPressed>
        <BoldIcon />
      </Toggle>
      <Toggle outline>
        <ItalicIcon /> Italic
      </Toggle>
    </>
  );
}

export function ToggleGroupDemo() {
  return (
    <>
      <ToggleGroup defaultValue={["left"]} aria-label="Alignment">
        <Toggle value="left" aria-label="Align left">
          <AlignLeftIcon />
        </Toggle>
        <Toggle value="center" aria-label="Align center">
          <AlignCenterIcon />
        </Toggle>
        <Toggle value="right" aria-label="Align right">
          <AlignRightIcon />
        </Toggle>
      </ToggleGroup>
      <ToggleGroup multiple defaultValue={["bold"]} aria-label="Text style">
        <Toggle value="bold" aria-label="Bold">
          <BoldIcon />
        </Toggle>
        <Toggle value="italic" aria-label="Italic">
          <ItalicIcon />
        </Toggle>
        <Toggle value="underline" aria-label="Underline">
          <UnderlineIcon />
        </Toggle>
      </ToggleGroup>
    </>
  );
}

export function KbdDemo() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search
      </span>
      <span className="text-sm text-muted-foreground">
        <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd>
      </span>
    </>
  );
}
